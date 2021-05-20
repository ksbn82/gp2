input.onButtonPressed(Button.B, function () {
    if (Gear < 9 && rpm >= 5000) {
        rpm += -5000
        Gear += 1
        basic.showNumber(Gear)
    }
})
let rpm = 0
let Gear = 0
serial.setBaudRate(BaudRate.BaudRate115200)
Gear = 1
radio.setGroup(111)
let myImage = 0
rpm = 100
basic.forever(function () {
    if (rpm >= 8000 && !(input.buttonIsPressed(Button.A))) {
        led.plotBarGraph(
        0,
        1
        )
        basic.pause(30)
        led.plotBarGraph(
        1,
        1
        )
        basic.pause(30)
    }
    if (rpm < 8000 && !(input.buttonIsPressed(Button.A))) {
        rpm += 250 / Gear
        led.plotBarGraph(
        rpm,
        8000
        )
    }
    if (input.buttonIsPressed(Button.A)) {
        if (rpm >= 1000) {
            rpm += -1000
        }
        led.plotBarGraph(
        rpm,
        8000
        )
        if (Gear > 1 && 3000 < rpm) {
            Gear += -1
            rpm = 8000
        }
    }
    serial.writeLine("" + (Gear))
})
