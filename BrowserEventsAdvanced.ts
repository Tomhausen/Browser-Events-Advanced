namespace browserEvents{

    //% blockId=getMouseCameraX
    //% block="getMouseCameraX"
    //% group="Mouse"
    //% weight=4
    export function getMouseCameraX(): number{
        return mouseX();
    }

    //% blockId=getMouseCameraY
    //% block="getMouseCameraY"
    //% group="Mouse"
    //% weight=3
    export function getMouseCameraY(): number {
        return mouseY();
    }

    //% blockId=getMouseSceneX
    //% block="getMouseSceneX"
    //% group="Mouse"
    //% weight=2
    export function getMouseSceneX(): number{
        return getMouseCameraX() + scene.cameraProperty(CameraProperty.Left)
    }

    //% blockId=getMouseSceneY
    //% block="getMouseSceneY"
    //% group="Mouse"
    //% weight=1
    export function getMouseSceneY(): number {
        return getMouseCameraY() + scene.cameraProperty(CameraProperty.Top)
    }

}