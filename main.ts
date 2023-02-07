input.onButtonPressed(Button.A, function () {
    random_number += 1
    if (my_choice > 2) {
        my_choice = 0
    }
    timeout = 0
})
input.onButtonPressed(Button.B, function () {
    random_number += -1
    if (my_choice < 0) {
        my_choice = 2
    }
    timeout = 0
})
let random_number = 0
let timeout = 0
let my_choice = 0
let Program_pointer = 0
my_choice = 0
timeout = 0
basic.forever(function () {
    if (Program_pointer == 0) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        if (timeout > 10) {
            Program_pointer += 1
        }
        timeout += 1
    }
    if (Program_pointer == 1) {
        music.playTone(698, music.beat(BeatFraction.Sixteenth))
        random_number = randint(0, 2)
        Program_pointer += 1
    }
    if (Program_pointer == 2) {
        if (my_choice == random_number) {
        	
        }
    }
})
