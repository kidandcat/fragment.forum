include karax / prelude
import jsutils, dom, karax / jwebsockets

{.reorder: on.}

proc connect*() =
  var s = newWebSocket("ws://localhost:9001/ws")
  s.onmessage = onMessage
  s.onopen = proc(e: MessageEvent) =
    echo "opened, data: " & e.data
    s.send("hi")

proc onMessage(e: MessageEvent) = 
  echo e.data