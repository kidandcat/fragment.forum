include karax / prelude
import jsutils, dom, karax / jwebsockets

{.reorder: on.}

proc xUser*(): VNode =
  return buildHtml(tdiv(class="user")):
    text "this is the user page"