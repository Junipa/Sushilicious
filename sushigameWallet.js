class Wallet {
    constructor(money) {
        this.money = money
    }

    getWalletContent() {
        return this.money
    }

    addToWallet(amount) {
        this.money += amount
    }

    removeFromWallet(amount) {
        if (this.money - amount >= 0) {
            this.money -= amount
        }
    }

    displayWallet(xPos, yPos) {
        CanvasManager.getContext().font = "15px Arial"
        CanvasManager.getContext().fillStyle = "#FDD05D"
        CanvasManager.getContext().fillRect(xPos, yPos, 65, 25)
        CanvasManager.getContext().fillStyle = "darkred"
        CanvasManager.getContext().fillText("$" + this.money, xPos + 10, yPos + 18)
    }
}