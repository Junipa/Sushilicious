class Clock {
	constructor() {
	}

    displayDot(xPos, yPos) {
        CanvasManager.getContext().beginPath()
        CanvasManager.getContext().arc(xPos, yPos, 1, 0, Math.PI*2)
        CanvasManager.getContext().closePath()
        CanvasManager.getContext().stroke()
    }

	displayClock(xPos, yPos) {
        CanvasManager.getContext().fillStyle = "white"
        CanvasManager.getContext().beginPath()
        CanvasManager.getContext().arc(xPos, yPos, 20, 0, Math.PI*2)
        CanvasManager.getContext().closePath()
        CanvasManager.getContext().fill()
        CanvasManager.getContext().stroke()
        this.displayDot(xPos, yPos)
        this.displayDot(xPos, yPos - 15)
        this.displayDot(xPos + 8, yPos - 13)
        this.displayDot(xPos + 14, yPos - 7)
        this.displayDot(xPos + 15, yPos)
        this.displayDot(xPos + 14, yPos + 7)
        this.displayDot(xPos + 8, yPos + 13)
        this.displayDot(xPos, yPos + 15)
        this.displayDot(xPos - 8, yPos + 13)
        this.displayDot(xPos - 13, yPos + 7)
        this.displayDot(xPos - 15, yPos)
        this.displayDot(xPos - 13, yPos - 7)
        this.displayDot(yPos - 8, yPos - 13)
    }

    displayMinutes(iterator, xPos, yPos) {
        let minutes = iterator%60
        minutes = Math.floor(minutes/5) * 5
        CanvasManager.getContext().beginPath()
        CanvasManager.getContext().moveTo(xPos, yPos)
        switch (minutes) {
            case 0:
                CanvasManager.getContext().lineTo(xPos, yPos - 15)
                break
            case 5:
                CanvasManager.getContext().lineTo(xPos + 8, yPos - 13)
                break
            case 10:
                CanvasManager.getContext().lineTo(xPos + 14, yPos - 7)
                break
            case 15:
                CanvasManager.getContext().lineTo(xPos + 15, yPos)
                break
            case 20:
                CanvasManager.getContext().lineTo(xPos + 14, yPos + 7)
                break
            case 25:
                CanvasManager.getContext().lineTo(xPos + 8, yPos + 13)
                break
            case 30:
                CanvasManager.getContext().lineTo(xPos, yPos + 15)
                break
            case 35:
                CanvasManager.getContext().lineTo(xPos - 8, yPos + 13)
                break
            case 40:
                CanvasManager.getContext().lineTo(xPos - 13, yPos + 7)
                break
            case 45:
                CanvasManager.getContext().lineTo(xPos - 15, yPos)
                break
            case 50:
                CanvasManager.getContext().lineTo(xPos - 13, yPos - 7)
                break
            case 55:
                CanvasManager.getContext().lineTo(xPos - 8, yPos - 13)
                break
        } 
        CanvasManager.getContext().stroke()
    }

    displayHours(iterator, xPos, yPos) {
        let hours = Math.floor((iterator%720)/60)
        CanvasManager.getContext().beginPath()
        CanvasManager.getContext().moveTo(xPos, yPos)
        switch (hours) {
            case 0:
                CanvasManager.getContext().lineTo(xPos, yPos - 10)
                break
            case 1:
                CanvasManager.getContext().lineTo(xPos + 4, yPos - 7)
                break
            case 2:
                CanvasManager.getContext().lineTo(xPos + 8, yPos - 5)
                break
            case 3:
                CanvasManager.getContext().lineTo(xPos + 10, yPos)
                break
            case 4:
                CanvasManager.getContext().lineTo(xPos + 8, yPos + 5)
                break
            case 5:
                CanvasManager.getContext().lineTo(xPos + 4, yPos + 7)
                break
            case 6:
                CanvasManager.getContext().lineTo(xPos, yPos + 10)
                break
            case 7:
                CanvasManager.getContext().lineTo(xPos - 5, yPos + 8)
                break
            case 8:
                CanvasManager.getContext().lineTo(xPos - 8, yPos + 5)
                break
            case 9:
                CanvasManager.getContext().lineTo(xPos - 10, yPos)
                break
            case 10:
                CanvasManager.getContext().lineTo(xPos - 8, yPos - 5)

                break
            case 11:
                CanvasManager.getContext().lineTo(xPos - 5, yPos - 8)
                break
        }
        CanvasManager.getContext().stroke()
    }

    displayTime(iterator, xPos, yPos) {
        this.displayClock(xPos, yPos)
        this.displayMinutes(iterator, xPos, yPos)
        this.displayHours(iterator, xPos, yPos)
    }
}