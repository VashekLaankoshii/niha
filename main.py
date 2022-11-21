rozmezi = 100

def on_forever():
    serial.write_value("x", 0)
    serial.write_value("x", 0)
    if input.sound_level() > 50:
        music.play_tone(262, music.beat(BeatFraction.BREVE))
    elif False:
        pass
    else:
        pass
basic.forever(on_forever)
