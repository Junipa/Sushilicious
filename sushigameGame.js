class Game {
 	constructor() {
        if (Game.background === undefined) {
            Game.background = new Image()
            Game.background.src = "images/background.png"
        }
  	    this.wallet = undefined
        this.stock = undefined
        this.restockOrder = undefined
        this.preparation = undefined
        this.interval = undefined
        this.displayUpdate = undefined
        this.iterator = 0
        this.clock = undefined
        this.started = false
        this.stopped = false
    }

    gameTickUpdate() {
        this.displayManagement()
        this.restockOrder.restockOrderUpdate()
        let i = randomRange(0, 100)
        if (i < Game.customerApparitionChances) {
                this.conveyorBelt.addCustomer(this.generateCustomer())
        }
        if ((!this.conveyorBelt.isRestaurantEmpty())
            && (!this.conveyorBelt.isEmpty())) {
            this.conveyorBelt.match()
        }
        this.conveyorBelt.updateConveyorBelt()
        this.preparation.updatePreparation()
        this.iterator++
    }

    initGame() {
        const myInstance = this
   	    this.wallet = new Wallet(20000)
        this.conveyorBelt = new ConveyorBelt(this.wallet, Game.numberOfSeats, Game.numberOfEmplacements, Game.ConveyorBeltWidth)
        this.preparation = new Preparation(this.conveyorBelt)
        this.stock = new Stock(this.preparation, Ingredient.fullListOfIngredients, Game.initialIngredientQuantity, Game.maxQuantity)
        this.restockOrder = new RestockOrder(this.wallet, this.stock, Ingredient.fullListOfIngredients, Game.restockQuantity, Game.deliveryDelay)
        this.clock = new Clock()
        KeyManager.registerKeydownCallback(" ", false, function() {
            myInstance.start()
        })
    }

    setIsStarted() {
        this.started = true
        const myGame = this
        const startMessage = document.getElementById("startMessage")
        startMessage.style.display = "none"
    }

    start() {
        if (this.started === false) {
            this.setIsStarted()
        }
        if (this.interval === undefined) {
            let myInstance = this
            this.stopped = false
            console.log("Start")
            this.interval = setInterval(function() { myInstance.gameTickUpdate() }, Game.tickValue)
            this.displayUpdate = setInterval(function() { myInstance.displayManagement()}, Game.displayUpdateValue)
            this.displayMenu(375, 10)
            this.stock.registerCallbackFunctions()
            this.restockOrder.registerCallbackFunctions()
            this.preparation.registerCallbackFunctions() 
        } else {
            this.stopped = true
            console.log("Stop")
            clearInterval(this.interval)
            this.interval = undefined
            this.displayMenu(375, 10)
            this.stock.unregisterCallbackFunctions()
            this.restockOrder.unregisterCallbackFunctions()
            this.preparation.unregisterCallbackFunctions() 
        }
    }

    generateCustomer() {
        return new Customer(this.wallet)
    }

    displayStartPause(xPos, yPos) {
        xPos += 10
        yPos += 5
        CanvasManager.getContext().fillStyle = "peru"
        CanvasManager.getContext().fillRect(xPos, yPos, 35, 30)
        CanvasManager.getContext().fillStyle = "#FDD05D"
        CanvasManager.getContext().fillRect(xPos + 2, yPos + 2, 31, 26)
        CanvasManager.getContext().fillStyle = "peru"
        if (!this.stopped) {
            CanvasManager.getContext().beginPath()
            CanvasManager.getContext().moveTo(xPos + 12, yPos + 10)
            CanvasManager.getContext().lineTo(xPos + 12, yPos + 20)
            CanvasManager.getContext().lineTo(xPos + 22, yPos + 15)
            CanvasManager.getContext().fill()
        } else if (this.stopped) {
            CanvasManager.getContext().fillRect(xPos + 10, yPos + 10, 5, 10)
            CanvasManager.getContext().fillRect(xPos + 18, yPos + 10, 5, 10) 
        }
    }

    displayMenu(xPos, yPos) {
        CanvasManager.getContext().fillStyle = "#FDD05D"
        CanvasManager.getContext().fillRect(xPos, yPos, 55, 40)
        this.displayStartPause(xPos, yPos)
    }

    displayRestaurant(xPos, yPos) {
        CanvasManager.getContext().drawImage(Game.background, xPos, yPos)
    }

    displayManagement() {
        CanvasManager.getContext().clearRect(0, 0, 800, 600)
        this.displayRestaurant(0, 0)
        this.displayMenu(375, 10)
        this.wallet.displayWallet(725, 12)
        this.stock.displayStock(20, 400)
        this.preparation.displayPreparation(220, 403)
        this.conveyorBelt.displayConveyorBelt(0, 270)
        this.clock.displayTime(this.iterator, 50, 50)
        this.restockOrder.displayRestockOrders(500, 420)
    }
}
Game.background = undefined
Game.initialIngredientQuantity = undefined
Game.numberOfSeats = undefined
Game.numberOfEmplacements = undefined
Game.maxQuantity = undefined
Game.ConveyorBeltWidth = undefined
Game.customerApparitionChances = undefined
Game.customerPatience = undefined
Game.customerNewOrderCoefficient = undefined
Game.restockQuantity = undefined
Game.deliveryDelay = undefined
Game.tickValue = undefined
Game.displayUpdateValue = undefined