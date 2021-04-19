class OnBeltRecipe {
    constructor(recipe, emplacement) {
        this.recipe = recipe
        this.emplacement = emplacement
    }
}

class SeatedCustomer {
    constructor(customer, seat) {
        this.customer = customer
        this.seat = seat        
    }
}

class ConveyorBelt {
    constructor(wallet, numberOfSeats, numberOfEmplacements, conveyorBeltWidth) {
        if (ConveyorBelt.chair === undefined) {
            ConveyorBelt.chair = new Image()
            ConveyorBelt.chair.src = "images/chair.png"
        }
        this.wallet = wallet
        this.numberOfSeats = numberOfSeats
        this.numberOfEmplacements = numberOfEmplacements
        this.conveyorBeltWidth = conveyorBeltWidth
        this.content = []
        this.customerList = []
    }

    isEmpty() {
        return (this.content.length === 0)
    }

    isFull() {
        return (this.content.length === this.numberOfEmplacements)
    }

    isRestaurantEmpty() {
        return (this.customerList.length === 0)
    }

    isRestaurantFull() {
        return (this.customerList.length === this.numberOfSeats)
    }

    isFirstEmplacementAvailable() {
        for (let recipe of this.content) {
            if (recipe.emplacement === 1) {
                return false
            }
        }
        return true
    }

    getFirstSeatAvailable() {
        let sortedSeats = this.customerList
        sortedSeats.sort(function (a, b) {
            return a.seat - b.seat
        })
        let seat = 1
        for (let seatedCustomer of sortedSeats) {
            if (seatedCustomer.seat === seat) {
                seat++
            }
        }
        return seat
    }

    getEmplacementfromSeat(seat) {
        return seat * 2
    }

    add(recipe) {
        if (!this.isFull() && this.isFirstEmplacementAvailable()) {
            this.content.push(new OnBeltRecipe(recipe, 1))
            return true
        }
        return false
    }

    addCustomer(customer) {
        if (!this.isRestaurantFull()) {
            this.customerList.push(new SeatedCustomer(customer, this.getFirstSeatAvailable()))
        }
    }

    match() {
        for (let i = 0; i < this.customerList.length; i++) {
            for (let j = 0; j < this.content.length; j++) {
                if (this.getEmplacementfromSeat(this.customerList[i].seat) === this.content[j].emplacement) {
                    if (this.customerList[i].customer.compareToOrder(this.content[j].recipe)
                        && !this.customerList[i].customer.isEating()) {
                        this.customerList[i].customer.isServed(this.content[j].recipe)
                        this.content.splice(j, 1)
                    }
                }
            }
        }
    }

    updateConveyorBelt() {
        for (let recipe of this.content) {
            if (recipe.emplacement < this.numberOfEmplacements){
                recipe.emplacement++
            } else {
                recipe.emplacement = 1
            }
        }
        for (let customer of this.customerList) {
            customer.customer.updateCustomer()
            if (customer.customer.isMealOver()) {
                this.customerList.splice(this.customerList.indexOf(customer), 1)
            }
        }
    }

    getRecipeCoordinates(emplacement) {
        return ((this.conveyorBeltWidth / (this.numberOfEmplacements + 1) * emplacement))
    }

    getCustomerCoordinates(seat) {
        return (this.getRecipeCoordinates(this.getEmplacementfromSeat(seat)) - 15)
    }

    //DISPLAY
    displayBelt(xPos, yPos) {
        CanvasManager.getContext().fillStyle = "dimgrey"
        CanvasManager.getContext().fillRect(xPos, yPos, 800, 60)
        for (let i = 0; i < 32; i++) {
            CanvasManager.getContext().fillStyle = "lightslategrey"
            CanvasManager.getContext().fillRect(xPos, yPos + 5, 20, 50)
            xPos += 25
        } 
    }

    displaySeats(xPos, yPos) {
        for (let i = 1; i < this.numberOfSeats + 1; i++) {
            CanvasManager.getContext().drawImage(ConveyorBelt.chair, this.getRecipeCoordinates(this.getEmplacementfromSeat(i)) - 50, yPos - 150)
        }
    }

    displayRecipes(xPos, yPos) {
        for (let recipe of this.content) {
            recipe.recipe.platedDisplayFunction(this.getRecipeCoordinates(recipe.emplacement), yPos)
        }
    }

    displayCustomers(xPos, yPos) {
        for (let customer of this.customerList) {
            customer.customer.displayCustomer(this.getCustomerCoordinates(customer.seat) - 34, yPos)
        }
    }

    displayConveyorBelt(xPos, yPos) {
        this.displayBelt(xPos, yPos)
        this.displaySeats(xPos, yPos)
        this.displayRecipes(xPos, yPos + 10)
        this.displayCustomers(xPos, yPos - 177)
    }
}
ConveyorBelt.chair = undefined