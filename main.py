def SetL293in(num: number, num2: number, num3: number, num4: number):
    pins.digital_write_pin(DigitalPin.P13, num)
    pins.digital_write_pin(DigitalPin.P14, num2)
    pins.digital_write_pin(DigitalPin.P15, num3)
    pins.digital_write_pin(DigitalPin.P16, num4)
def SetMotor2Speed(speed: number):
    if speed < 0:
        pins.digital_write_pin(DigitalPin.P15, 1)
        pins.digital_write_pin(DigitalPin.P16, 0)
    elif speed > 0:
        pins.digital_write_pin(DigitalPin.P15, 0)
        pins.digital_write_pin(DigitalPin.P16, 1)
    else:
        pins.digital_write_pin(DigitalPin.P15, 0)
        pins.digital_write_pin(DigitalPin.P16, 0)
    pins.analog_write_pin(AnalogPin.P2, Math.round(abs(speed) / 100 * 1023))
def SetMotor1Speed(speed2: number):
    if speed2 < 0:
        pins.digital_write_pin(DigitalPin.P13, 1)
        pins.digital_write_pin(DigitalPin.P14, 0)
    elif speed2 > 0:
        pins.digital_write_pin(DigitalPin.P13, 0)
        pins.digital_write_pin(DigitalPin.P14, 1)
    else:
        pins.digital_write_pin(DigitalPin.P13, 0)
        pins.digital_write_pin(DigitalPin.P14, 0)
    pins.analog_write_pin(AnalogPin.P1, Math.round(abs(speed2) / 100 * 1023))

def on_bluetooth_connected():
    basic.show_icon(IconNames.HAPPY)
bluetooth.on_bluetooth_connected(on_bluetooth_connected)

def on_bluetooth_disconnected():
    basic.show_icon(IconNames.SAD)
bluetooth.on_bluetooth_disconnected(on_bluetooth_disconnected)

def SetMotors(mot1: number, mot2: number):
    SetMotor1Speed(mot1)
    SetMotor2Speed(mot2)

def on_mes_dpad_controller_id_microbit_evt():
    if control.event_value() == EventBusValue.MES_DPAD_BUTTON_A_DOWN:
        basic.show_leds("""
            . . # . .
                        . # . # .
                        # . . . #
                        . . . . .
                        . . . . .
        """)
        SetMotors(50, 50)
    elif control.event_value() == EventBusValue.MES_DPAD_BUTTON_A_UP:
        basic.show_icon(IconNames.HAPPY)
        SetMotors(0, 0)
    elif control.event_value() == EventBusValue.MES_DPAD_BUTTON_B_DOWN:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        # . . . #
                        . # . # .
                        . . # . .
        """)
        SetMotors(-50, -50)
    elif control.event_value() == EventBusValue.MES_DPAD_BUTTON_B_UP:
        basic.show_icon(IconNames.HAPPY)
    elif control.event_value() == EventBusValue.MES_DPAD_BUTTON_C_DOWN:
        basic.show_leds("""
            . . # . .
                        . # . . .
                        # . . . .
                        . # . . .
                        . . # . .
        """)
    elif control.event_value() == EventBusValue.MES_DPAD_BUTTON_C_UP:
        basic.show_icon(IconNames.HAPPY)
    elif control.event_value() == EventBusValue.MES_DPAD_BUTTON_D_DOWN:
        basic.show_leds("""
            . . # . .
                        . . . # .
                        . . . . #
                        . . . # .
                        . . # . .
        """)
    elif control.event_value() == EventBusValue.MES_DPAD_BUTTON_D_UP:
        basic.show_icon(IconNames.HAPPY)
    elif control.event_value() == EventBusValue.MES_DPAD_BUTTON_1_DOWN:
        basic.show_leds("""
            . . # . .
                        . . # . .
                        . . # . .
                        . . . . .
                        . . . . .
        """)
    elif control.event_value() == EventBusValue.MES_DPAD_BUTTON_1_UP:
        basic.show_icon(IconNames.HAPPY)
    elif control.event_value() == EventBusValue.MES_DPAD_BUTTON_2_DOWN:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . # . .
                        . . # . .
                        . . # . .
        """)
    elif control.event_value() == EventBusValue.MES_DPAD_BUTTON_2_UP:
        basic.show_icon(IconNames.HAPPY)
    elif control.event_value() == EventBusValue.MES_DPAD_BUTTON_3_DOWN:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        # # # . .
                        . . . . .
                        . . . . .
        """)
    elif control.event_value() == EventBusValue.MES_DPAD_BUTTON_3_UP:
        basic.show_icon(IconNames.HAPPY)
    elif control.event_value() == EventBusValue.MES_DPAD_BUTTON_4_DOWN:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . # # #
                        . . . . .
                        . . . . .
        """)
    elif control.event_value() == EventBusValue.MES_DPAD_BUTTON_4_UP:
        basic.show_icon(IconNames.HAPPY)
control.on_event(EventBusSource.MES_DPAD_CONTROLLER_ID,
    EventBusValue.MICROBIT_EVT_ANY,
    on_mes_dpad_controller_id_microbit_evt)

basic.show_icon(IconNames.SMALL_HEART)