bussula = 0

def on_gesture_shake():
    apontarNorte()
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def apontarNorte():
    global bussula
    bussula = input.compass_heading()
    if bussula > 337.5 or bussula <= 22.5:
        basic.show_arrow(ArrowNames.NORTH)
    elif bussula > 22.5 and bussula <= 67.5:
        basic.show_arrow(ArrowNames.NORTH_WEST)
    elif bussula > 67.5 and bussula <= 112.5:
        basic.show_arrow(ArrowNames.WEST)
    elif bussula > 112.5 and bussula <= 157.5:
        basic.show_arrow(ArrowNames.SOUTH_EAST)
    elif bussula > 157.5 and bussula <= 202.5:
        basic.show_arrow(ArrowNames.SOUTH)
    elif bussula > 202.5 and bussula <= 247.5:
        basic.show_arrow(ArrowNames.SOUTH_EAST)
    elif bussula > 247.5 and bussula <= 292.5:
        basic.show_arrow(ArrowNames.EAST)
    elif bussula > 292.5 and bussula <= 335.5:
        basic.show_arrow(ArrowNames.NORTH_EAST)