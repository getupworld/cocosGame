import Engine from "../engine/Engine";

export function story_test(): void{
    Engine.LogInfo("lyj test: ------------------------------------------------------------loadScene 123");
   
    let handle = Engine.EventMgr.BindEvent("KeyDown", keyd);
    Engine.LogInfo("handle = "+handle.toString());
    cc.director.loadScene("123");
}

function keyd(data): void{
    Engine.LogInfo("data = "+data.keyCode.toString());
}