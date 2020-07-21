import Engine from "../Engine";

export default class InputMgr {
    Init(): void {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }
    onKeyDown(event): void {
        Engine.EventMgr.Emit("KeyDown", {keyCode:event.keyCode});
        // switch(event.keyCode) {
        //     case cc.macro.KEY.a:
        //         console.log('Press a key');
        //         break;
        // }
    }

    onKeyUp(event): void {
        Engine.EventMgr.Emit("KeyUp", {key:event.keyCode});
        // switch(event.keyCode) {
        //     case cc.macro.KEY.a:
        //         console.log('release a key');
        //         break;
        // }
    }
}
