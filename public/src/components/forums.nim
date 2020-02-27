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
  # TODO get list of subforums in the forum
  var list : seq[string]
  if name == "General":
    list.add("Offtopic")
    list.add("Videos")
    list.add("Viajes")
    list.add("Guerrillas")
    list.add("Tráfico ilegal de órganos")
    list.add("Suicidios colectivos")
    list.add("Cosas oscuras")
    list.add("Espadas láser")
    list.add("Recambios de impresoras")
    list.add("Carcasas de móviles")
    list.add("Colonias falsas")
  elif name == "Videojuegos":
    list.add("Godot")
    list.add("Unity")
    list.add("Unreal")
  return buildHtml(tdiv(class="forum-element")):
    p():
      text name
    tdiv(class="subforums-container"):
      for subforum in list:
        xSubforum(subforum):
          text "Pequena descripcion"
proc xSubForum*(name:string): VNode=
  return buildHtml(tdiv(class="subforum-element")):
    p():
      text name