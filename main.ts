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
    basic.showIcon(IconNames.Happy)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
})
function SetMotors (mot1: number, mot2: number) {
    SetMotor1Speed(mot1)
    SetMotor2Speed(mot2)
}
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_DOWN) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            . . . . .
            `)
        SetMotors(50, 50)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_UP) {
        basic.showIcon(IconNames.Happy)
        SetMotors(0, 0)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_DOWN) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . #
            . # . # .
            . . # . .
            `)
        SetMotors(-50, -50)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_UP) {
        basic.showIcon(IconNames.Happy)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_DOWN) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # . . . .
            . # . . .
            . . # . .
            `)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_UP) {
        basic.showIcon(IconNames.Happy)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_DOWN) {
        basic.showLeds(`
            . . # . .
            . . . # .
            . . . . #
            . . . # .
            . . # . .
            `)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_UP) {
        basic.showIcon(IconNames.Happy)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_DOWN) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_UP) {
        basic.showIcon(IconNames.Happy)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_DOWN) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_UP) {
        basic.showIcon(IconNames.Happy)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_DOWN) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # . .
            . . . . .
            . . . . .
            `)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_UP) {
        basic.showIcon(IconNames.Happy)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_DOWN) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # # #
            . . . . .
            . . . . .
            `)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_UP) {
        basic.showIcon(IconNames.Happy)
    }
})
basic.showIcon(IconNames.SmallHeart)
