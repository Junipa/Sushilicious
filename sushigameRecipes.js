class Recipe {
    constructor(name, price, ingredientList, displayFunction, platedDisplayFunction) {
        this.name = name
        this.price = price
        this.ingredientList = ingredientList
        this.displayFunction = displayFunction
        this.platedDisplayFunction = platedDisplayFunction
    }

    getName() {
        return this.name
    }

    getPrice() {
        return this.price
    }

    equals(recipe) {
        return (this.name === recipe.getName())
    }

//A OPTIMISER
    match(ingredientArray) {
        for (let currentIngredient of this.ingredientList) {
            let numberInRecipe = 0
            for (let ingredientInRecipe of this.ingredientList) {
                if (ingredientInRecipe.equals(currentIngredient)) {
                    numberInRecipe++
                }
            }
            let numberInArray = 0
            for (let ingredientInArray of ingredientArray) {
                if (ingredientInArray.equals(currentIngredient)) {
                    numberInArray++
                }
            }
            if (numberInRecipe !== numberInArray) {
              return false
            }
        }
        return (this.ingredientList.length === ingredientArray.length)
    }

    toString() {
        return this.name
    }

    __displayPlate(xPos, yPos) {
        CanvasManager.getContext().fillStyle = "#cceeff"
        CanvasManager.getContext().beginPath()
        CanvasManager.getContext().ellipse(xPos, yPos + 5, 22, 18, Math.PI, 0, 2 * Math.PI)
        CanvasManager.getContext().fill()
        CanvasManager.getContext().fillStyle = "#005580"
        CanvasManager.getContext().beginPath()
        CanvasManager.getContext().ellipse(xPos, yPos + 5, 16, 12, Math.PI, 0, 2 * Math.PI)
        CanvasManager.getContext().fill()
        CanvasManager.getContext().fillStyle = "#cceeff"
        CanvasManager.getContext().beginPath()
        CanvasManager.getContext().ellipse(xPos, yPos + 5, 15, 11, Math.PI, 0, 2 * Math.PI)
        CanvasManager.getContext().fill()
    }
}
Recipe.onigiriSprite = new Image()
Recipe.onigiriSprite.src = "images/onigiri.png"
Recipe.platedOnigiriSprite = new Image()
Recipe.platedOnigiriSprite.src = "images/platedOnigiri.png"
Recipe.roeMakiSprite = new Image()
Recipe.roeMakiSprite.src = "images/roeMaki.png"
Recipe.platedroeMakiSprite = new Image()
Recipe.platedroeMakiSprite.src = "images/platedroeMaki.png"
Recipe.roeCaliforniaSprite = new Image()
Recipe.roeCaliforniaSprite.src = "images/roeCalifornia.png"
Recipe.platedroeCaliforniaSprite = new Image()
Recipe.platedroeCaliforniaSprite.src = "images/platedroeCalifornia.png"
Recipe.salmonMakiSprite = new Image()
Recipe.salmonMakiSprite.src = "images/salmonMaki.png"
Recipe.platedSalmonMakiSprite = new Image()
Recipe.platedSalmonMakiSprite.src = "images/platedSalmonMaki.png"
Recipe.tunaMakiSprite = new Image()
Recipe.tunaMakiSprite.src = "images/tunaMaki.png"
Recipe.platedTunaMakiSprite = new Image()
Recipe.platedTunaMakiSprite.src = "images/platedTunaMaki.png"
Recipe.onigiri = new Recipe(
    "Onigiri",
    150,
    [Ingredient.rice, Ingredient.rice, Ingredient.nori],
    function(xPos, yPos) {
        CanvasManager.getContext().drawImage(Recipe.onigiriSprite, xPos - 6, yPos - 3)
    },
    function(xPos, yPos) {
        CanvasManager.getContext().drawImage(Recipe.platedOnigiriSprite, xPos, yPos)
    }
)
Recipe.roeCalifornia = new Recipe(
    "Salmon roe California roll",
    200,
    [Ingredient.rice, Ingredient.nori, Ingredient.roe],
    function(xPos, yPos) {
        CanvasManager.getContext().drawImage(Recipe.roeCaliforniaSprite, xPos, yPos)
    },
    function(xPos, yPos) {
        CanvasManager.getContext().drawImage(Recipe.platedroeCaliforniaSprite, xPos, yPos)
    }
)
Recipe.roeMaki = new Recipe(
    "Salmon roe Maki",
    250,
    [Ingredient.rice, Ingredient.nori, Ingredient.roe, Ingredient.roe],
    function(xPos, yPos) {
        CanvasManager.getContext().drawImage(Recipe.roeMakiSprite, xPos, yPos)
    },
    function(xPos, yPos) {
        CanvasManager.getContext().drawImage(Recipe.platedroeMakiSprite, xPos, yPos)
    }
)
Recipe.salmonMaki = new Recipe(
    "Salmon Maki",
    350,
    [Ingredient.rice, Ingredient.nori, Ingredient.salmon, Ingredient.salmon],
    function(xPos, yPos) {
        CanvasManager.getContext().drawImage(Recipe.salmonMakiSprite, xPos, yPos)
    },
    function(xPos, yPos) {
        CanvasManager.getContext().drawImage(Recipe.platedSalmonMakiSprite, xPos, yPos)
    }
)
Recipe.tunaMaki = new Recipe(
    "Tuna Maki",
    350,
    [Ingredient.rice, Ingredient.nori, Ingredient.tuna, Ingredient.tuna],
    function(xPos, yPos) {
        CanvasManager.getContext().drawImage(Recipe.tunaMakiSprite, xPos, yPos)
    },
    function(xPos, yPos) {
        CanvasManager.getContext().drawImage(Recipe.platedTunaMakiSprite, xPos, yPos)
    }
)
Recipe.salmonCalifornia = new Recipe(
    "Salmon California roll",
    300,
    [Ingredient.rice, Ingredient.nori, Ingredient.salmon],
    function(xPos, yPos) {
        CanvasManager.getContext().drawImage(Recipe.salmonCaliforniaSprite, xPos, yPos)
    },
    function(xPos, yPos) {
        CanvasManager.getContext().drawImage(Recipe.platedSalmonCaliforniaSprite, xPos, yPos)
    }
)
Recipe.tunaCalifornia = new Recipe(
    "Tuna California roll",
    300,
    [Ingredient.rice, Ingredient.nori, Ingredient.tuna],
    function(xPos, yPos) {
        CanvasManager.getContext().drawImage(Recipe.tunaCaliforniaSprite, xPos, yPos)
    },
    function(xPos, yPos) {
        CanvasManager.getContext().drawImage(Recipe.platedTunaCaliforniaSprite, xPos, yPos)
    }
)
Recipe.fullListofRecipes = [
    Recipe.onigiri, Recipe.roeCalifornia, Recipe.roeMaki
]