import Log,{LogLevel} from "./log/Log";
import EventMgr from "./event/EventMgr";
import UpdateMgr from "./update/UpdateMgr";
import StoryMgr from "./story/StoryMgr";
import EngineSetting from "./setting/EngineSetting";
import CocosSetting from "./setting/CocosSetting";




export default class Engine {
    static root_node: cc.Node;
    static log: Log;
    static event_mgr: EventMgr;
    static update_mgr: UpdateMgr;
    static story_mgr: StoryMgr;
    static engine_setting: EngineSetting;
    static cocos_setting: CocosSetting;

    static Init(): void {

        // 添加常驻根节点
        Engine.root_node = cc.find("Engine");
        if(!Engine.root_node)
        {
            Engine.root_node = new cc.Node();
            Engine.root_node.name = "Engine";
        }
        cc.game.addPersistRootNode(Engine.root_node);

        // log
        Engine.log =new Log();
        Engine.log.Init();

        //eventMge
        Engine.event_mgr = new EventMgr();
        Engine.event_mgr.Init();

        // 添加Updater用于驱动游戏逻辑
        Engine.root_node.addComponent("Updater");
        Engine.update_mgr = new UpdateMgr();
        Engine.update_mgr.Init();

        //storyMgr
        Engine.story_mgr = new StoryMgr();
        Engine.story_mgr.Init();

        // 添加Setting模块
        Engine.engine_setting = new EngineSetting();
        Engine.engine_setting.Init();
        Engine.cocos_setting = new CocosSetting();
        Engine.cocos_setting.Init();
    }
    static Update(dt: number): void {
        Engine.update_mgr.Update(dt);
    }
    // log
    static LogInfo(info: string): void {this.log.LogInfo(info);}
    static LogDebug(info: string): void {this.log.LogDebug(info);}
    static LogWarn(info: string): void {this.log.LogWarn(info);}
    static LogError(info: string): void {this.log.LogError(info);}
    // event
    static get EventMgr(): EventMgr {return Engine.event_mgr;}
    // update
    static AddUpdate(obj: any): void {Engine.update_mgr.AddUpdate(obj);}
    static DelUpdate(obj: any): void {Engine.update_mgr.DelUpdate(obj);}

    // story
    static get StoryMgr(): StoryMgr {return Engine.story_mgr;}
    static RegisterStory(name: string, callback: Function): void {Engine.story_mgr.Register(name, callback);}
    static UnregisterStory(name: string): void {Engine.story_mgr.Unregister(name);}
    
    
}
