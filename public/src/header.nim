include karax / prelude
import jsutils, dom, karax / jwebsockets

{.reorder: on.}

addStylesheet "style.css"
addScript "https://kit.fontawesome.com/2bef865634.js"

proc xHeader*(): VNode =
  return buildHtml(tdiv(class="header")):
    tdiv(class="content"):
      tdiv(class="left"):
        img(src="https://forum.nim-lang.org/images/logo.png"):
          proc onclick(ev: Event; n: VNode) =
            window.location.hash = "#/"
      tdiv(class="right"):
        input(class="search", placeholder="search")
        button():
          span(class="fas fa-user-plus")
          text "Sign up"
        button():
          span(class="fas fa-sign-in-alt")
          text "Login"