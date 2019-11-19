include karax / prelude
import jsutils, dom, karax / jwebsockets
import src/header
import src/network
import src/router

{.reorder: on.}

proc createDom(data: RouterData): VNode =
  return buildHtml(tdiv):
    xHeader()
    xRouter(data)

setRenderer createDom
connect()

