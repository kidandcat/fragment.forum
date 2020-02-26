include karax / prelude
import jsutils, dom, karax / jwebsockets

{.reorder: on.}
proc xForums*(): VNode =
  # TODO get list of forums
  var list = ["General", "Videojuegos", "Programación"]
  return buildHtml(tdiv(class="forum-index")):
    for forum in list:
      xForum(forum)

proc xForum*(name:string): VNode =
  return buildHtml(tdiv(class="forum")):
    text name

proc xSubForum*(): VNode=
  return buildHtml(tdiv(class="subforum")):
    text "this is the home"