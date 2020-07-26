import Engine from "../../engine/Engine";
import {story_test} from "./story_test";
import {story_load_scene_plane} from "./story_load_scene_plane";
import {story_scene_plane_start} from "./story_scene_plane_start";

export function Init(): void{
    Engine.RegisterStory("story_test", story_test);
    Engine.RegisterStory("story_load_scene_plane", story_load_scene_plane);
    Engine.RegisterStory("story_scene_plane_start", story_scene_plane_start);
}