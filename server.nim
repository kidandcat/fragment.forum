import norm/sqlite
import 
  asyncdispatch,
  ws, 
  ws/jester_extra, 
  jester, 
  json, 
  chronicles, 
  jwt, 
  times, 
  tables, 
  nimcrypto
  

{.experimental: "codeReordering".}

const LISTEN_PORT = Port(8081)
info "Server listening on", port = repr(LISTEN_PORT)

settings:
  port = LISTEN_PORT

db("msg.db", "", "", ""):
  type
    User = object
      name: string
      email: string
      password: string
      avatar: string
    Message = object
      text: string
      author: uint
      chatID: uint

withDb:
  createTables(force=true)

var connections = newTable[string, WebSocket]()
proc sen(ws: WebSocket, command: string, payload: JsonNode) {.async.} =
  echo "<<<------", command, $payload
  if ws.readyState == Open:
    await ws.send($ %*{
      "command": command,
      "payload": payload
    })

routes:
  error Exception:
    resp Http500, "Something bad happened: " & exception.msg
  get "/ws":
    var email = ""
    try:
      var ws = await newWebSocket(request)
      withDb:
        while ws.readyState == Open:
          let packet = await ws.receiveStrPacket()
          var m = parseJson packet
          var p = m{"payload"}
          echo "------>>>", packet.substr(0, 100)
          case m["command"].getStr:

            # # # #
            # JWT #
            # # # #
            of "jwt":
              try:
                let jwtToken = p["token"].getStr.toJWT()
                if jwtToken.verify(secret):
                  email = jwtToken.claims["email"].node.getStr
                  discard User.getOne("email=?", [?email])
                  connections[email] = ws
                  await ws.sen("check", %*{
                    "logged": true
                  })
                else:
                  email = ""
              except InvalidToken:
                email = ""

            # # # # #
            # LOGIN #
            # # # # #
            of "login":
              var lemail = p["email"].getStr
              var password = p["password"].getStr
              try:
                var u = User.getOne(cond="email=?", params=[dbValue lemail])
                if u.name == "":
                  await ws.sen("loginerror", %*{
                    "error": "El usuario no existe"
                  })
                  continue
                if u.password == $keccak_256.digest(password):
                  email = lemail
                  connections[email] = ws
                  await ws.sen("jwt", %*{
                    "token": sign(lemail)
                  })
                else:
                  await ws.sen("loginerror", %*{
                    "error": "Contraseña incorrecta"
                  })
              except:
                echo getCurrentExceptionMsg()
                await ws.sen("loginerror", %*{
                  "error": "El usuario no existe"
                })

    except:
        echo email, " disconnected ", getCurrentExceptionMsg()
        connections.del(email)


# # # # # # #
# SECURITY  #
# # # # # # #
var secret = "thenoobssecretisthemostpowerful"

proc sign*(userId: string): string =
  var exp = (getTime() + 1.days).toSeconds().int
  debug "Generating JWT", userId = userId, expiration = exp
  var token = toJWT(%*{
    "header": {
      "alg": "HS256",
      "typ": "JWT"
    },
    "claims": {
      "userId": userId,
      "exp": exp
    }
  })
  token.sign(secret)
  result = $token

proc verify*(token: string): bool =
  debug "Verifying JWT", token = token
  try:
    let jwtToken = token.toJWT()
    result = jwtToken.verify(secret)
  except InvalidToken:
    result = false

proc decode*(token: string): string =
  if verify token:
    let jwt = token.toJWT()
    result = jwt.claims["userId"].node.getStr
    debug "Decoded JWT", userId = result
  else:
    raise newException(Exception, "Invalid JWT") 