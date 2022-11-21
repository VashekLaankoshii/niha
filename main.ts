input.onButtonPressed(Button.A, function () {
    rozmezi += 20
    basic.showString("" + (rozmezi))
})
input.onButtonPressed(Button.B, function () {
    if (rozmezi > 0) {
        rozmezi += -20
        basic.showString("" + (rozmezi))
    } else {
        basic.showString("" + (rozmezi))
    }
})
let rozmezi = 0
rozmezi = 60
let Rozmezi2 = 0
let Zvuk = 0
basic.forever(function () {
    Zvuk = input.soundLevel()
})
basic.forever(function () {
    serial.writeValue("x", Zvuk)
    if (Zvuk > rozmezi) {
        basic.showIcon(IconNames.Sad)
        music.playTone(262, music.beat(BeatFraction.Breve))
        serial.writeString("N")
    } else {
        basic.showIcon(IconNames.Happy)
    }
    basic.pause(100)
})
