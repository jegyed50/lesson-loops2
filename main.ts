// lesson-loops2
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
        led.plot(index, index)
        led.plot(4 - index, index)
        led.plot(index, 0)
        led.plot(index, 4)
        led.plot(0, index)
        led.plot(4, index)
        music.playTone(440, music.beat(BeatFraction.Quarter))
    }
    basic.pause(1000)
    basic.clearScreen()
})
function OSZLOP (num: number) {
    for (let index2 = 0; index2 <= 4; index2++) {
        led.plot(num, index2)
        basic.pause(100)
    }
}
input.onButtonPressed(Button.AB, function () {
    for (let index3 = 0; index3 <= 4; index3++) {
        for (let index2 = 0; index2 <= 4; index2++) {
            led.plot(index2, index3)
            basic.pause(300)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index4 = 0; index4 <= 4; index4++) {
        music.playTone(220 + index4 * 220, music.beat(BeatFraction.Quarter))
        SOR(index4)
        OSZLOP(index4)
        basic.pause(100)
    }
    basic.pause(1000)
    basic.clearScreen()
})
function SOR (num: number) {
    for (let index5 = 0; index5 <= 4; index5++) {
        led.plot(index5, num)
        basic.pause(100)
    }
}
basic.forever(function () {
	
})
