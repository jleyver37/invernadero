basic.forever(function () {
    while (input.buttonIsPressed(Button.AB)) {
        basic.showNumber(input.temperature())
        basic.pause(1000)
        basic.showNumber(input.lightLevel())
    }
    while (input.buttonIsPressed(Button.A)) {
        basic.showNumber(input.temperature())
    }
    while (input.buttonIsPressed(Button.B)) {
        basic.showNumber(input.lightLevel())
    }
    if (input.temperature() < 8 && input.lightLevel() <= 100) {
        basic.showLeds(`
            . . . . .
            . # . # #
            . . # . .
            . . # . .
            . . . # #
            `)
    } else {
    	
    }
})
