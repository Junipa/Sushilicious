class Ingredient {
	constructor(name, price, key, displayFunction, stockDisplayFunction) {
		this.name = name
		this.price = price
        this.key = key
        this.displayFunction = displayFunction
        this.stockDisplayFunction = stockDisplayFunction
	}

	getName() {
		return this.name
	}

	getPrice() {
		return this.price
	}

    getKey() {
        return this.key
    }

    equals(ingredient) {
        return ((ingredient !== undefined) && (this.name === ingredient.name))
    }

    toString() {
        return this.name
    }
}
Ingredient.riceStockSprite = new Image()
Ingredient.riceStockSprite.src = "images/riceStock.png"
Ingredient.roeSprite = new Image()
Ingredient.roeSprite.src = "images/roe.png"
Ingredient.roeStockSprite = new Image()
Ingredient.roeStockSprite.src = "images/roeStock.png"
Ingredient.noriStockSprite = new Image()
Ingredient.noriStockSprite.src = "images/noriStock.png"
Ingredient.avocadoSprite = new Image()
Ingredient.avocadoSprite.src = "images/avocado.png"
Ingredient.avocadoStockSprite = new Image()
Ingredient.avocadoStockSprite.src = "images/avocadoStock.png"
Ingredient.rice = new Ingredient(
    "Rice",
    100,
    "A",
    function (xPos, yPos) {
        CanvasManager.getContext().fillStyle = "white"
        CanvasManager.getContext().beginPath()
        CanvasManager.getContext().arc(xPos, yPos, 15, 0, Math.PI*2)
        CanvasManager.getContext().fill()
        CanvasManager.getContext().arc(xPos, yPos, 15, 0, Math.PI*2)
        CanvasManager.getContext().stroke()
        CanvasManager.getContext().closePath()
    },
    function (xPos, yPos) {
    //     CanvasManager.getContext().drawImage(Ingredient.riceStockSprite, xPos, yPos)
        CanvasManager.getContext().fillStyle = "white"
        CanvasManager.getContext().beginPath()
        CanvasManager.getContext().arc(xPos, yPos, 15, 0, Math.PI*2)
        CanvasManager.getContext().fill()
        CanvasManager.getContext().arc(xPos, yPos, 15, 0, Math.PI*2)
        CanvasManager.getContext().stroke()
        CanvasManager.getContext().closePath()
    }
)
Ingredient.roe = new Ingredient(
    "Salmon Roe",
    200,
    "Z",
    function (xPos, yPos) {
        // CanvasManager.getContext().drawImage(Ingredient.roeSprite, xPos, yPos)
        let displayRoe = function (xPos, yPos) {
            CanvasManager.getContext().fillStyle = "orangered"
            CanvasManager.getContext().beginPath()
            CanvasManager.getContext().arc(xPos, yPos, 8, 0, Math.PI*2)
            CanvasManager.getContext().fill()
            CanvasManager.getContext().closePath()
            CanvasManager.getContext().fillStyle = "darkorange"
            CanvasManager.getContext().beginPath()
            CanvasManager.getContext().arc(xPos, yPos, 6, 0, Math.PI*2)
            CanvasManager.getContext().fill()
            CanvasManager.getContext().closePath()
            CanvasManager.getContext().fillStyle = "firebrick"
            CanvasManager.getContext().beginPath()
            CanvasManager.getContext().arc(xPos, yPos, 2, 0, Math.PI*2)
            CanvasManager.getContext().fill()
            CanvasManager.getContext().closePath()
            CanvasManager.getContext().fillStyle = "darkorange"
            CanvasManager.getContext().beginPath()
            CanvasManager.getContext().arc(xPos - 1, yPos - 5, 3, 0, Math.PI*2)
            CanvasManager.getContext().fill()
            CanvasManager.getContext().closePath()
            CanvasManager.getContext().fillStyle = "white"
            CanvasManager.getContext().beginPath()
            CanvasManager.getContext().arc(xPos - 1, yPos - 6, 1, 0, Math.PI*2)
            CanvasManager.getContext().fill()
            CanvasManager.getContext().closePath()
        }
        displayRoe(xPos, yPos - 8)
        displayRoe(xPos - 8, yPos + 5)
        displayRoe(xPos + 8, yPos + 5)
    },
    function (xPos, yPos) {
        // CanvasManager.getContext().drawImage(Ingredient.roeStockSprite, xPos, yPos)
        let displayRoe = function (xPos, yPos) {
            CanvasManager.getContext().fillStyle = "orangered"
            CanvasManager.getContext().beginPath()
            CanvasManager.getContext().arc(xPos, yPos, 8, 0, Math.PI*2)
            CanvasManager.getContext().fill()
            CanvasManager.getContext().closePath()
            CanvasManager.getContext().fillStyle = "darkorange"
            CanvasManager.getContext().beginPath()
            CanvasManager.getContext().arc(xPos, yPos, 6, 0, Math.PI*2)
            CanvasManager.getContext().fill()
            CanvasManager.getContext().closePath()
            CanvasManager.getContext().fillStyle = "firebrick"
            CanvasManager.getContext().beginPath()
            CanvasManager.getContext().arc(xPos, yPos, 2, 0, Math.PI*2)
            CanvasManager.getContext().fill()
            CanvasManager.getContext().closePath()
            CanvasManager.getContext().fillStyle = "darkorange"
            CanvasManager.getContext().beginPath()
            CanvasManager.getContext().arc(xPos - 1, yPos - 5, 3, 0, Math.PI*2)
            CanvasManager.getContext().fill()
            CanvasManager.getContext().closePath()
            CanvasManager.getContext().fillStyle = "white"
            CanvasManager.getContext().beginPath()
            CanvasManager.getContext().arc(xPos - 1, yPos - 6, 1, 0, Math.PI*2)
            CanvasManager.getContext().fill()
            CanvasManager.getContext().closePath()
        }
        displayRoe(xPos, yPos - 8)
        displayRoe(xPos - 8, yPos + 5)
        displayRoe(xPos + 8, yPos + 5)
    }
)
Ingredient.nori = new Ingredient(
    "Nori",
    100,
    "E",
    function (xPos, yPos) {
        xPos -= 8
        yPos -= 8
        CanvasManager.getContext().fillStyle = "black"
        CanvasManager.getContext().fillRect(xPos, yPos, 15, 25)
        CanvasManager.getContext().fillStyle = "darkgreen"
        CanvasManager.getContext().fillRect(xPos + 1, yPos, 3, 8)
        CanvasManager.getContext().fillRect(xPos + 1, yPos + 9, 3, 10)
        CanvasManager.getContext().fillRect(xPos + 1, yPos + 20, 3, 5)
        CanvasManager.getContext().fillRect(xPos + 6, yPos, 3, 10)
        CanvasManager.getContext().fillRect(xPos + 6, yPos + 11, 3, 5)
        CanvasManager.getContext().fillRect(xPos + 6, yPos + 16, 3, 8)
        CanvasManager.getContext().fillRect(xPos + 11, yPos, 3, 5)
        CanvasManager.getContext().fillRect(xPos + 11, yPos + 6, 3, 8)
        CanvasManager.getContext().fillRect(xPos + 11, yPos + 15, 3, 10)
    },
    function (xPos, yPos) {
        // CanvasManager.getContext().drawImage(Ingredient.noriStockSprite, xPos, yPos)
        xPos -= 8
        yPos -= 8
        CanvasManager.getContext().fillStyle = "black"
        CanvasManager.getContext().fillRect(xPos, yPos, 15, 25)
        CanvasManager.getContext().fillStyle = "darkgreen"
        CanvasManager.getContext().fillRect(xPos + 1, yPos, 3, 8)
        CanvasManager.getContext().fillRect(xPos + 1, yPos + 9, 3, 10)
        CanvasManager.getContext().fillRect(xPos + 1, yPos + 20, 3, 5)
        CanvasManager.getContext().fillRect(xPos + 6, yPos, 3, 10)
        CanvasManager.getContext().fillRect(xPos + 6, yPos + 11, 3, 5)
        CanvasManager.getContext().fillRect(xPos + 6, yPos + 16, 3, 8)
        CanvasManager.getContext().fillRect(xPos + 11, yPos, 3, 5)
        CanvasManager.getContext().fillRect(xPos + 11, yPos + 6, 3, 8)
        CanvasManager.getContext().fillRect(xPos + 11, yPos + 15, 3, 10)
    }
)
Ingredient.avocado = new Ingredient(
    "Avocado",
    400,
    "R",
    function(xPos, yPos) {
        CanvasManager.getContext().drawImage(Ingredient.avocadoSprite, xPos, yPos)
    },
    function (xPos, yPos) {
        CanvasManager.getContext().drawImage(Ingredient.avocadoStockSprite, xPos, yPos)
    }
)
Ingredient.salmon = new Ingredient(
    "Salmon",
    600,
    "Q",
    function(xPos, yPos) {

    },
    function (xPos, yPos) {
        
    }
)
Ingredient.tuna = new Ingredient(
    "Tuna",
    700,
    "S",
    function(xPos, yPos) {
    
    },
    function (xPos, yPos) {
        
    }
)
Ingredient.mackerel = new Ingredient(
    "Mackerel",
    500,
    "D",
    function(xPos, yPos) {
    
    },
    function (xPos, yPos) {
        
    }
)
Ingredient.shrimp = new Ingredient(
    "Shrimp",
    600,
    "F",
    function(xPos, yPos) {
    
    },
    function (xPos, yPos) {
        
    }
)
Ingredient.eggs = new Ingredient(
    "Eggs",
    300,
    "C",
    function(xPos, yPos) {
    
    },
    function (xPos, yPos) {
        
    }
)
Ingredient.fullListOfIngredients =
[
    Ingredient.rice, Ingredient.roe, Ingredient.nori
]

