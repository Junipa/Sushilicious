class Stock {
	constructor(preparation, ingredientList, initialQuantity, maxQuantity) {
        if (Stock.container === undefined) {
            Stock.container = new Image()
            Stock.container.src = "images/stock.png"
        }
        this.preparation = preparation
		this.ingredientList = []
        this.initialQuantity = initialQuantity
        this.maxQuantity = maxQuantity
		this.quantity = []
		for (let ingredient of ingredientList) {
            this.ingredientList.push(ingredient)
			this.quantity.push(this.initialQuantity)
		}
	}

    registerCallbackFunctions() {
        const myStock = this
        for (let ingredient of this.ingredientList) {
            KeyManager.registerKeydownCallback(ingredient.key, false, function() {
                myStock.useIngredient(myStock.ingredientList.indexOf(ingredient))
            })
        }
    }

    unregisterCallbackFunctions() {
        const myStock = this
        for (let ingredient of this.ingredientList) {
            KeyManager.unregisterCallback(ingredient.key, false)
        }
    }

	restock(ingredient, quantity) {
        for (let i = 0; i < this.ingredientList.length; i++) {
            console.log("restock")
            if (ingredient.equals(this.ingredientList[i])) {
                this.quantity[i] = Math.min(this.quantity[i] + quantity, this.maxQuantity)
                console.log("Delivery " + ingredient.getName())
                break
            }
        }
	}

    displayWarningEmptyIngredient(ingredientIndex, xPos, yPos) {
        if ((ingredientIndex !== 0)
            && (ingredientIndex%2 !== 0)) {
            xPos += 50
        } else if ((ingredientIndex !== 0)
            && (ingredientIndex%2 === 0)) {
            yPos += 50
        }
        CanvasManager.getContext().fillStyle = "rgb(255, 127, 80)"
        CanvasManager.getContext().fillRect(xPos, yPos, 48, 48)
    }

	useIngredient(ingredientIndex) {
        if (this.quantity[ingredientIndex] > 0) {
            if (this.preparation.add(this.ingredientList[ingredientIndex])) {
                this.quantity[ingredientIndex]--
            }
        } else {
            this.displayWarningEmptyIngredient(ingredientIndex, 27, 422)
        }
    }

    enableInteraction() {
    }

    disableInteraction() {
    }
    
    displayStock(xPos, yPos) {
        CanvasManager.getContext().drawImage(Stock.container, xPos, yPos)
        for (let i = 0; i < this.ingredientList.length; i++) {
            if (this.quantity[i] > 0) { 
                CanvasManager.getContext().fillStyle = "white"
                CanvasManager.getContext().fillRect(xPos +10, yPos +10, 47, 47)
                this.ingredientList[i].stockDisplayFunction(xPos +33, yPos +33)
                CanvasManager.getContext().font = "8px Arial"
                CanvasManager.getContext().fillStyle = "darkred"
                CanvasManager.getContext().fillText(this.quantity[i], xPos +45, yPos +50)
            } else {
                CanvasManager.getContext().fillStyle = "darkslategray"
                CanvasManager.getContext().fillRect(xPos +10, yPos +10, 46, 46)
            }
            CanvasManager.getContext().font = "12px Arial"
            CanvasManager.getContext().fillStyle = "#FDD05D"
            CanvasManager.getContext().fillText(this.ingredientList[i].getKey(), xPos + 14, yPos + 21)
            CanvasManager.getContext().font = "12px Arial"
            CanvasManager.getContext().fillStyle = "darkred"
            CanvasManager.getContext().fillText(this.ingredientList[i].getKey(), xPos + 13, yPos + 20)
            if (i%2 === 0) {
                xPos += 50
            } else if (i%2 !== 0) {
                xPos -= 50
                yPos += 50
            }
        }
    }
}
Stock.container = undefined