input.onGesture(Gesture.TiltRight, function () {
    richtung = "_right"
    mqtt_publish_bt("bt_right", bt_speed)
})
input.onGesture(Gesture.LogoUp, function () {
    mqtt_publish_bt("bt_bw" + richtung, bt_speed)
})
input.onGesture(Gesture.ScreenDown, function () {
    mqtt_publish_bt("bt_turn" + richtung, bt_speed)
})
function mqtt_publish_joystick () {
    pins.read_joystick()
    if (joystick_fahren == pins.get_x() && joystick_lenken == pins.get_y()) {
        pins.comment(pins.pins_text("wenn nichts geändert, kein Publish"))
        return true
    } else {
        i_payload += 1
        if (serial.mqtt_publish("topic", "" + i_payload + ";j;" + pins.get_x() + ";" + pins.get_y())) {
            pins.comment(pins.pins_text("wenn Publish erfolgreich, x y Werte speichern"))
            joystick_fahren = pins.get_x()
            joystick_lenken = pins.get_y()
            lcd.write_array(serial.get_response(), lcd.eINC.inc0, serial.get_response_index())
            return true
        } else {
            pins.comment(pins.pins_text("wenn Publish false, nach Pause noch mal versuchen"))
            lcd.write_array(serial.get_response(), lcd.eINC.inc0, serial.get_response_index())
            basic.pause(200)
            return false
        }
    }
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (!(lcd.get_display(lcd.eDisplay.none))) {
        lcd.write_array(serial.get_response(), lcd.eINC.inc1)
    } else if (mqtt_connected) {
        bt_speed = 300
        basic.setLedColors(0x0000ff, 0x000000, 0x000000)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    richtung = "_left"
    mqtt_publish_bt("bt_left", bt_speed)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    basic.setLedColors(0x000000, 0x000000, 0x0000ff)
    i_payload = 0
    while (mqtt_connected) {
        mqtt_publish_joystick()
        basic.pause(100)
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (!(mqtt_connected)) {
        basic.setLedColors(0x000000, 0xffffff, 0x000000)
        if (serial.wifi_connect("TXT4.0-sWp6", "ozvTwHC7")) {
            basic.setLedColors(0x000000, 0x00ff00, 0x000000)
        } else {
            basic.setLedColors(0x000000, 0xff0000, 0x000000)
        }
        lcd.write_array(serial.get_response(), lcd.eINC.inc0, serial.get_response_index())
    } else if (serial.at_command(serial.serial_eAT(serial.eAT_commands.at_mqttclean), 2)) {
        mqtt_connected = false
        basic.setLedColors(0x000000, 0x000000, 0xffff00)
    } else {
        mqtt_connected = false
        basic.setLedColors(0x000000, 0x000000, 0xff0000)
    }
})
input.onGesture(Gesture.LogoDown, function () {
    mqtt_publish_bt("bt_fw" + richtung, bt_speed)
})
input.onButtonEvent(Button.A, input.buttonEventValue(ButtonEvent.Hold), function () {
    if (!(lcd.get_display(lcd.eDisplay.none))) {
        if (serial.at_command(serial.serial_eAT(serial.eAT_commands.at_mqttconn), 5)) {
            lcd.write_array(serial.get_response(), lcd.eINC.inc0, serial.get_response_index())
        }
    } else if (mqtt_connected) {
        bt_speed = 512
        basic.setLedColors(0x000000, 0x0000ff, 0x000000)
    }
})
input.onButtonEvent(Button.B, input.buttonEventValue(ButtonEvent.Hold), function () {
    basic.setLedColors(0x000000, 0x000000, 0xffffff)
    if (!(serial.mqtt_client("calliope"))) {
        basic.setLedColors(0x000000, 0x000000, 0xff0000)
    } else if (!(serial.mqtt_connect("192.168.8.2", 1884))) {
        basic.setLedColors(0x000000, 0x000000, 0x00ffff)
    } else {
        basic.setLedColors(0x000000, 0x000000, 0x00ff00)
        mqtt_connected = true
    }
    lcd.write_array(serial.get_response(), lcd.eINC.inc0, serial.get_response_index())
})
input.onGesture(Gesture.ScreenUp, function () {
    richtung = ""
    mqtt_publish_bt("bt_stop", 0)
})
function mqtt_publish_bt (button_id: string, speed: number) {
    if (mqtt_connected && !(last_button_id == button_id)) {
        i_payload += 1
        if (serial.mqtt_publish("topic", "" + i_payload + ";" + button_id + ";" + speed)) {
            last_button_id = button_id
            lcd.write_array(serial.get_response(), lcd.eINC.inc0, serial.get_response_index())
        } else {
            basic.pause(200)
        }
    }
}
let last_button_id = ""
let i_payload = 0
let joystick_lenken = 0
let joystick_fahren = 0
let richtung = ""
let bt_speed = 0
let mqtt_connected = false
basic.setLedColors(0xffffff, 0x000000, 0x000000)
mqtt_connected = false
serial.init_serial()
basic.setLedColors(0xffffff, 0xffffff, 0x000000)
basic.pause(2000)
lcd.init_display(lcd.eDisplay.qwiic_20_4, true)
if (lcd.get_display(lcd.eDisplay.none)) {
    basic.setLedColors(0xffffff, 0xffffff, 0xff0000)
    basic.pause(2000)
} else {
    basic.setLedColors(0xffffff, 0xffffff, 0xffffff)
}
if (serial.at_command(serial.serial_eAT(serial.eAT_commands.at_rst), 5)) {
    basic.setLedColors(0x00ff00, 0x000000, 0x000000)
} else {
    basic.setLedColors(0xff0000, 0x000000, 0x000000)
}
lcd.write_array(serial.get_response(), lcd.eINC.inc0, serial.get_response_index())
bt_speed = 400
