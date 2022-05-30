basic.forever(function () {
    if (input.temperature() > 30 && input.lightLevel() > 100) {
        basic.showIcon(IconNames.Duck)
        basic.clearScreen()
    }
})
