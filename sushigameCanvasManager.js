class CanvasManager {
    constructor() {
    }

    static initCanvas() {
        CanvasManager.__instance = new CanvasManager()
    }

    static getContext() {
        if (CanvasManager.__instance === undefined) {
            console.error("CanvasManager not initialised")
        }
        return document.getElementById("canvas").getContext("2d")
    }

    static registerOnClickCallback(callBackFunction) {
        if (CanvasManager.__instance === undefined) {
            console.error("CanvasManager not initialised")
        }
        CanvasManager.__instance.callBack = callBackFunction
    }
}
CanvasManager.__instance = undefined