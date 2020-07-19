import Engine from "../engine/Engine";
import {story_test} from "./story_test";

export function Init(): void{
    Engine.RegisterStory("story_test", story_test);
}