include karax / prelude
import jsutils, dom, karax / jwebsockets

{.reorder: on.}

proc xHome*(): VNode =
  return buildHtml(tdiv(class="home")):
    text "this is the home"