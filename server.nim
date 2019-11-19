import norm/sqlite
import ws, asyncdispatch, asynchttpserver, json

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

var connections = newSeq[WebSocket]()

proc cb(req: Request) {.async, gcsafe.} =
  if req.url.path == "/ws":
    try:
      var ws = await newWebSocket(req)
      connections.add ws
      withDb:
        var bob = User(
          name: "bob",
          email: "bob@example.com",
          password: "pass",
          avatar: ""
        )
        bob.insert()
        await ws.send($ %bob)
      while ws.readyState == Open:
        let packet = await ws.receiveStrPacket()
        for other in connections:
          if other.readyState == Open:
            asyncCheck other.send(packet)
    except:
      echo ":: socket closed " & getCurrentExceptionMsg() & ":"
  await req.respond(Http200, "Hello World")

var server = newAsyncHttpServer()
waitFor server.serve(Port(9001), cb)