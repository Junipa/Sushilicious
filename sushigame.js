function onClickCookBookDisplay() {
    const button = document.getElementById("cookBookButton")
    const cookBook = document.getElementById("cookBook")
    button.onclick=function() {
        if (cookBook.style.display === "none") {
            cookBook.style.display = "block"
        } else {
            cookBook.style.display = "none"
        }
    }
}

function onClickGuideDisplay() {
    const button = document.getElementById("guideButton")
    const guide = document.getElementById("guide")
    button.onclick=function() {
        if (guide.style.display === "none") {
            guide.style.display = "block"
        } else {
            guide.style.display = "none"
        }
    }
}

function setValues() {
    Game.initialIngredientQuantity = 10
    Game.maxQuantity = 20
    Game.numberOfSeats = 6
    Game.numberOfEmplacements = 12
    Game.ConveyorBeltWidth = 800
    Game.customerApparitionChances = 5
    Game.customerPatience = 200
    Game.customerNewOrderCoefficient = 20
	Game.restockQuantity = 10
    Game.deliveryDelay = 30
    Game.tickValue = 150
    Game.displayUpdateValue = 10
}

window.addEventListener("load", function () {
    CanvasManager.initCanvas()
    KeyManager.initKeyManager()
    onClickCookBookDisplay()
    onClickGuideDisplay()
    setValues()
    const game = new Game()
    game.initGame()
    game.displayManagement()
    console.log("Loaded")
})