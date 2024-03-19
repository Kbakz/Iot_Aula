let bussula = 0
input.onButtonPressed(Button.A, function () {
    apontarNorte()
})
function apontarNorte () {
    bussula = input.compassHeading()
    if (bussula > 337.5 || bussula <= 22.5) {
        basic.showArrow(ArrowNames.North)
    } else if (bussula > 22.5 && bussula <= 67.5) {
        basic.showArrow(ArrowNames.NorthWest)
    } else if (bussula > 67.5 && bussula <= 112.5) {
        basic.showArrow(ArrowNames.West)
    } else if (bussula > 112.5 && bussula <= 157.5) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (bussula > 157.5 && bussula <= 202.5) {
        basic.showArrow(ArrowNames.South)
    } else if (bussula > 202.5 && bussula <= 247.5) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (bussula > 247.5 && bussula <= 292.5) {
        basic.showArrow(ArrowNames.East)
    } else if (bussula > 292.5 && bussula <= 335.5) {
        basic.showArrow(ArrowNames.NorthEast)
    }
}
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
