include karax / prelude
import jsutils, dom, karax / jwebsockets, ../components/forums

{.reorder: on.}

proc xHome*(): VNode =
  return buildHtml(tdiv(class="home")):
    tdiv(class="sidecontent")
    tdiv(class="centralcontent"):
      xForums()
    tdiv(class="sidecontent")