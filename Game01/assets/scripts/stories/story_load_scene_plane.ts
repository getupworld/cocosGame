import Engine from "../../engine/Engine";

export function story_load_scene_plane(): void{
    Engine.LoadScene("plane");
    let handle = Engine.EventMgr.BindEvent("SceneOnStart", function (data): void{
        if (data.name == "plane"){
            Engine.EventMgr.UnbindEvent("SceneOnStart", handle);
            Engine.StoryMgr.Get("story_scene_plane_start")();
        }
    });
}

