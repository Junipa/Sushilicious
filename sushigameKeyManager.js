class KeyboardCallbackStructure {
	constructor(key, isShiftKeyNeeded, callbackFunction) {
		this.key = key
        this.isShiftKeyNeeded = isShiftKeyNeeded
		this.callbackFunction = callbackFunction
	}
}

class KeyManager {
	constructor() {
		this.callbackStructure = []
		window.addEventListener("keydown", function(event) {
			if (KeyManager.__instance !== undefined) {
                for (let callback of KeyManager.__instance.callbackStructure) {
                	if ((callback.key.toUpperCase() === event.key.toUpperCase())
                        && (callback.isShiftKeyNeeded === event.shiftKey)) {
                		callback.callbackFunction(event)
                	}
                }
            }
        })
    }

    static initKeyManager() {
        KeyManager.__instance = new KeyManager()
    }

    static registerKeydownCallback(key, isShiftKeyNeeded, callbackFunction) {
        if (KeyManager.__instance === undefined) {
            console.error("KeyManager not initialised")
        }
        for (let callback of KeyManager.__instance.callbackStructure) {
            if (callback.key === key && callback.isShiftKeyNeeded === isShiftKeyNeeded) {
                return
            }
        }
        KeyManager.__instance.callbackStructure.push(new KeyboardCallbackStructure(key, isShiftKeyNeeded, callbackFunction))
    }

    static unregisterCallback(key, isShiftKeyNeeded) {
        for (let callback of KeyManager.__instance.callbackStructure) {
            if (key === callback.key) {
                KeyManager.__instance.callbackStructure.splice(KeyManager.__instance.callbackStructure.indexOf(callback), 1)
            }
        }
    }
}
KeyManager.__instance = undefined