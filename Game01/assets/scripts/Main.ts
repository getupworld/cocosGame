import Engine from "../engine/Engine";
import {Init as StoryInit}  from "../stories/Init";
const {ccclass} = cc._decorator;

@ccclass
export default class Main extends cc.Component {
    start(): void {
        // Init Core
        Engine.Init();
        StoryInit();
        Engine.StoryMgr.Get("story_test")();
    }

}
