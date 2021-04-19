class Preparation {
    constructor(conveyorBelt) {
        if (Preparation.mat === undefined) {
            Preparation.mat = new Image()
            Preparation.mat.src = "images/mat.png"
        }
        this.conveyorBelt = conveyorBelt
        this.currentIngredients = []
        this.waitingRecipe = undefined
        this.warningTurdDelay = undefined
    }

    registerCallbackFunctions() {
        const myPrep = this
        KeyManager.registerKeydownCallback("Enter", false, function() {
            myPrep.prepare()
        })
    }

    unregisterCallbackFunctions() {
            KeyManager.unregisterCallback("Enter", false)
    }


    placeOnBelt(recipe) {
        return this.conveyorBelt.add(recipe)
    }

    __displayWarningTurd(xPos, yPos) {
        CanvasManager.getContext().font = "30px Arial"
        CanvasManager.getContext().fillStyle = "#FDD05D"
        CanvasManager.getContext().fillText("You just prepared a TURD", xPos + 2, yPos + 2)
        CanvasManager.getContext().font = "30px Arial"
        CanvasManager.getContext().fillStyle = "darkred"
        CanvasManager.getContext().fillText("You just prepared a TURD", xPos, yPos)
    }

    prepare() {
        if (this.currentIngredients.length > 0) {
            for (let recipe of Recipe.fullListofRecipes) {
                if (recipe.match(this.currentIngredients)) {
                    this.currentIngredients = []
                    if (this.placeOnBelt(recipe)) {
                        return
                    } else {
                        this.waitingRecipe = recipe
                        this.waitingRecipe.displayFunction(300, 420)
                        return
                    }
                }
            }
            this.currentIngredients = []
            this.preparationOver = false
            this.warningTurdDelay = 4
        }
    }

    __displayWarningPreparationFull(xPos, yPos) {
        CanvasManager.getContext().fillStyle = "rgba(255, 127, 80, 0.5)"
        CanvasManager.getContext().fillRect(xPos, yPos, 260, 182)
    }

    add(ingredient) {
        if ((this.waitingRecipe === undefined)
            && (this.currentIngredients.length < 6)) {
            this.currentIngredients.push(ingredient)
            return true
        } else if (this.currentIngredients.length === 6) {
            this.__displayWarningPreparationFull(220, 403)
            return false
        } else if (this.waitingRecipe !== undefined) {
            console.log("Recette en cours de préparation, impossible d'ajouter un ingrédient")
            return false
        }
    }

    updatePreparation() {
        if (this.waitingRecipe !== undefined) {
            if (this.placeOnBelt(this.waitingRecipe)) {
                this.waitingRecipe = undefined
            }
        }
        if (this.warningTurdDelay > 0) {
            this.__displayWarningTurd(220, 200)
            this.warningTurdDelay--
        }
    }

    //DISPLAY
    displayIngredients(xPos, yPos) {
        for (let ingredient of this.currentIngredients) {
            ingredient.displayFunction(xPos, yPos)
            if (xPos < 400) {
                xPos += 70
            } else if ( xPos === 410) {
                xPos = 270
                yPos += 60
            }
        }
    }

    displayMat(xPos, yPos) {
        CanvasManager.getContext().drawImage(Preparation.mat, xPos, yPos)
    }

    displayPreparation(xPos, yPos) {
        this.displayMat(xPos, yPos)
        if (this.currentIngredients.length > 0) {
            this.displayIngredients(xPos + 50, yPos + 45)
        } else if (this.waitingRecipe !== undefined) {
            this.waitingRecipe.displayFunction(xPos + 113, yPos + 80)
        }
    }
}
Preparation.mat = undefined