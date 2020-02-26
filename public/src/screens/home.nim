include karax / prelude
import jsutils, dom, karax / jwebsockets, ../components/forums

{.reorder: on.}

proc xHome*(): VNode =
  return buildHtml(tdiv(class="home")):
    tdiv(class="sidecontent")
    xForums()
    tdiv(class="sidecontent")