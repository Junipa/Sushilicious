class RestockOrder {
	constructor(wallet, stock, ingredientList, restockQuantity, deliveryDelay) {
        this.wallet = wallet
        this.stock = stock
		this.ingredientList = []
        this.restockQuantity = restockQuantity
        this.deliveryDelay = deliveryDelay
        this.delay = []
		for (let ingredient of ingredientList) {
			this.ingredientList.push(ingredient)
            this.delay.push(-1)
		}
	}

    registerCallbackFunctions() {
        const myRestock = this
        for (let ingredient of this.ingredientList) {
            KeyManager.registerKeydownCallback(ingredient.key, true, function() {
                myRestock.placeOrder(myRestock.ingredientList.indexOf(ingredient))
            })
        }        
    }

    unregisterCallbackFunctions() {
        const myStock = this
        for (let ingredient of this.ingredientList) {
            KeyManager.unregisterCallback(ingredient.key, true)
        }        
    }

    displayDelivery(ingredientIndex, xPos, yPos) {
        CanvasManager.getContext().font = "20px Arial"
        CanvasManager.getContext().fillStyle = "#FDD05D"
        CanvasManager.getContext().fillText(Ingredient.fullListOfIngredients[ingredientIndex].getName() + " delivery in " + this.delay[ingredientIndex] + "mn.", xPos + 2, yPos + 2)
        CanvasManager.getContext().font = "20px Arial"
        CanvasManager.getContext().fillStyle = "darkred"
        CanvasManager.getContext().fillText(Ingredient.fullListOfIngredients[ingredientIndex].getName() + " delivery in " + this.delay[ingredientIndex] + "mn.", xPos, yPos)

    }

	placeOrder(ingredientIndex) {
        if ((ingredientIndex < this.ingredientList.length)
            && (this.delay[ingredientIndex] < 0)
            && (this.wallet.getWalletContent() >= this.ingredientList[ingredientIndex].getPrice())) {
            this.wallet.removeFromWallet(this.ingredientList[ingredientIndex].getPrice())
            this.delay[ingredientIndex] = this.deliveryDelay
        }
    }

    __delivery(ingredientIndex) {
        this.stock.restock(this.ingredientList[ingredientIndex], this.restockQuantity)
    }

    restockOrderUpdate() {
        for (let i = 0; i < this.delay.length; i++) {
            if (this.delay[i] > 0) {
                this.delay[i]--
                continue
            } 
            if (this.delay[i] === 0) {
                this.__delivery(i)
                this.delay[i] = -1
            }
        }

    }

    displayRestockOrders(xPos, yPos) {
        for (let i = 0; i < this.delay.length; i++) {
            if (this.delay[i] > 0) {
                this.displayDelivery(i, xPos, yPos)
                yPos += 30
            }
        }
    }
}