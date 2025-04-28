radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        lcdDisplay.lcdSetBgIamge("AnniePic1.png")
    } else if (receivedNumber == 2) {
        lcdDisplay.lcdSetBgIamge("cooper1.jpg")
    } else if (receivedNumber == 3) {
        lcdDisplay.lcdSetBgIamge("sister1.jpg")
    }
})
radio.setGroup(1)
basic.showIcon(IconNames.Heart)
lcdDisplay.lcdInitIIC()
basic.forever(function () {
	
})
