input.onButtonEvent(Button.AB, btf.buttonEventValue(ButtonEvent.Hold), function () {
    sender.setSendReset(true)
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    sender.buttonA()
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    sender.buttonAB()
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    sender.buttonB()
})
input.onButtonEvent(Button.B, btf.buttonEventValue(ButtonEvent.Hold), function () {
    btf.buttonBhold()
})
function modell_Buggy () {
    if (sender.isFunktion(sender.eFunktion.m0_s0)) {
        sender.send00M0Joystick(
        btf.btf_sendBuffer19(),
        sender.sender_xmotor(),
        sender.sender_servo16(),
        sender.sender_ButtonA_Switch(),
        btf.e3Abstand.u0
        )
    } else if (sender.isFunktion(sender.eFunktion.f10fernstartenSpurfolger)) {
        sender.send10Spurfolger(
        btf.btf_sendBuffer19(),
        192,
        160,
        31,
        0,
        sender.sender_ButtonA_Switch(),
        btf.e3Abstand.u0,
        sender.sender_zehntelsekunden(btf.ePause.s1)
        )
        btf.setaktiviert(btf.btf_sendBuffer19(), btf.e3aktiviert.mc, sender.sender_ButtonB_Switch())
    } else {
    	
    }
}
input.onButtonEvent(Button.A, btf.buttonEventValue(ButtonEvent.Hold), function () {
    btf.buttonAhold()
})
sender.beimStart(true, btf.eFunkgruppe.b4)
loops.everyInterval(400, function () {
    if (sender.isFunktion(sender.eFunktion.ng) && sender.joystickQwiic()) {
        btf.setLedColors(btf.btf_RgbLed(btf.eRgbLed.a), 0x0000ff)
        btf.fill_sendBuffer19()
        modell_Buggy()
        btf.sendData(btf.btf_sendBuffer19())
        btf.zeige5x5Buffer(btf.btf_sendBuffer19())
        btf.zeige5x5Joystick(btf.btf_sendBuffer19())
        btf.setLedColors(btf.btf_RgbLed(btf.eRgbLed.a), 0x0000ff, false)
    }
})
