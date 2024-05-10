namespace browserEvents{

    //% blockId=getMouseX
    //% block="getMouseX"
    //% group="Mouse"
    //% weight=2
    export function getMouseX(): number{
        return mouseX();
    }

    //% blockId=getMouseY
    //% block="getMouseY"
    //% group="Mouse"
    //% weight=1
    export function getMouseY(): number {
        return mouseY();
    }

}