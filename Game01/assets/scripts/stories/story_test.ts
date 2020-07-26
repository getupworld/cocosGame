import Engine from "../../engine/Engine";

export function story_test(): void{
    Engine.LogInfo("lyj test: ------------------------------------------------------------loadScene 123");
   
    let handle = Engine.EventMgr.BindEvent("KeyDown", keyd);
    Engine.LogInfo("handle = "+handle.toString());
    Engine.LoadScene("123");
}

function keyd(data): void{
    Engine.LogInfo("data = "+data.keyCode.toString());
}