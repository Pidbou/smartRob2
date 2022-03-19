function SetL293in (num: number, num2: number, num3: number, num4: number) {
    pins.digitalWritePin(DigitalPin.P13, num)
    pins.digitalWritePin(DigitalPin.P14, num2)
    pins.digitalWritePin(DigitalPin.P15, num3)
    pins.digitalWritePin(DigitalPin.P16, num4)
}
function SetMotor2Speed (speed: number) {
    if (speed < 0) {
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.digitalWritePin(DigitalPin.P16, 0)
    } else if (speed > 0) {
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
    }
    pins.analogWritePin(AnalogPin.P2, Math.round(Math.abs(speed) / 100 * 1023))
}
function SetMotor1Speed (speed2: number) {
    if (speed2 < 0) {
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P14, 0)
    } else if (speed2 > 0) {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
    }
    pins.analogWritePin(AnalogPin.P1, Math.round(Math.abs(speed2) / 100 * 1023))
}
bluetooth.onBluetoothConnected(function () {
    bluetooth.startUartService()
    basic.showIcon(IconNames.Happy)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
    SetMotors(0, 0)
})
function SetMotors (mot1: number, mot2: number) {
    SetMotor1Speed(mot1)
    SetMotor2Speed(mot2)
}
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Hash), function () {
    Right = parseFloat(bluetooth.uartReadUntil(serial.delimiters(Delimiters.SemiColon)))
    Forward = parseFloat(bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash)))
    if (Math.abs(Forward) < 10 && Math.abs(Right) < 10) {
        SetMotors(0, 0)
    } else {
        SetMotors((Forward + Right) / 2, (Forward - Right) / 2)
    }
})
let Forward = 0
let Right = 0
basic.showIcon(IconNames.SmallHeart)
SetMotors(0, 0)
