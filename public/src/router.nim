include karax / prelude
import jsutils, dom, karax / jwebsockets

import screens/home
import screens/user

proc xRouter*(data: RouterData): VNode =
  if data.hashPart == "#/user": return xUser()
  else: return xHome()