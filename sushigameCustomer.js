class Customer {
    constructor(wallet) {
        this.wallet = wallet
        this.isWaiting = true
        this.patience = Game.customerPatience
        this.eatingDelay = undefined
        this.serves = 0
        this.bill = 0
        this.hasPaid = false
        this.createOrder()
        this.setSprite()
    }

    createOrder() {
        let i = randomRange(0, (Recipe.fullListofRecipes.length - 1))
        this.order = Recipe.fullListofRecipes[i]
    }

    setSprite() {
        let i = randomRange(0, (Customer.customerList.length - 1))
        this.sprite = Customer.customerList[i]
    }

    getOrder() {
        return this.order
    }

    compareToOrder(recipe) {
        return this.order.equals(recipe)
    }

    addToBill(amount) {
        this.bill += amount
    }

    pay() {
        this.wallet.addToWallet(this.bill)
        this.hasPaid = true
    }

    isEating() {
        return (!this.isWaiting)
    }

    newOrder() {
        let i = randomRange(0,100)
        if (i > (this.serves * Game.customerNewOrderCoefficient)) {
                this.createOrder()
                this.isWaiting = true
                return true
        }
        return false
    }

    isMealOver() {
        return this.hasPaid
    }

    isServed(recipe) {
        this.isWaiting = false
        this.patience = Game.customerPatience
        this.serves++
        this.eatingDelay = 10
        this.addToBill(recipe.getPrice())
    }

    updateCustomer() {
        if (this.isWaiting) {
            this.patience--
        }
        if (this.eatingDelay !== undefined) {
            this.eatingDelay--
            if (this.eatingDelay === 0) {
                if (!this.newOrder()) {
                    this.pay()   
                }
            }
        }
    }

    displayOrder(xPos, yPos) {
        CanvasManager.getContext().fillStyle = "black"
        CanvasManager.getContext().fillRect(xPos - 8, yPos - 9, 36, 36)
        CanvasManager.getContext().fillStyle = "white"
        CanvasManager.getContext().fillRect(xPos - 7, yPos - 8, 34, 34)
        this.order.displayFunction(xPos, yPos - 3)
    }

    displayPlatedOrder(xPos, yPos) {
        this.order.platedDisplayFunction(xPos, yPos)
    }

    displayPatience(xPos, yPos) {
        CanvasManager.getContext().fillStyle = "black"
        CanvasManager.getContext().fillRect(xPos, yPos - 9, 10, 36)
        switch (Math.floor(this.patience/50)) {
            case 0:
                CanvasManager.getContext().fillStyle = "red"
                CanvasManager.getContext().fillRect(xPos + 1, yPos + 18, 8, 8)
                break 
            case 1:
                CanvasManager.getContext().fillStyle = "orange"
                CanvasManager.getContext().fillRect(xPos + 1, yPos + 10, 8, 16)
                break
            case 2:
                CanvasManager.getContext().fillStyle = "yellow"
                CanvasManager.getContext().fillRect(xPos + 1, yPos, 8, 25)
                break
            case 3:
                CanvasManager.getContext().fillStyle = "green"
                CanvasManager.getContext().fillRect(xPos + 1, yPos - 8, 8, 34)
                break
        }
    }

    displayCustomer(xPos, yPos) {
        CanvasManager.getContext().drawImage(this.sprite, xPos, yPos)
        if (this.isWaiting) {
            this.displayOrder(xPos + 35, yPos - 30)
            this.displayPatience(xPos, yPos - 30)
            if (this.patience === 0) {
                this.pay()
            }
        }
        if (this.isEating()) {
            this.displayPlatedOrder(xPos + 20, yPos + 110)
        }
        
    }

    toString() {
        return `Customer ${this.order}`
    }
}
Customer.customer1 = new Image()
Customer.customer1.src = "images/customer1.png"
Customer.customer2 = new Image()
Customer.customer2.src = "images/customer2.png"
Customer.customer3 = new Image()
Customer.customer3.src = "images/customer3.png"
Customer.customer4 = new Image()
Customer.customer4.src = "images/customer4.png"
Customer.customerList = [Customer.customer1, Customer.customer2, Customer.customer3, Customer.customer4]