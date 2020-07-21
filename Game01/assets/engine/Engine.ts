import LogMgr,{LogLevel} from "./log/LogMgr";
import EngineSetting from "./setting/EngineSetting";
import CocosSetting from "./setting/CocosSetting";
import UpdateMgr from "./update/UpdateMgr";
import TimeSystem from "./time/TimeSystem";
import TimerMgr from "./time/TimerMgr";
import EventMgr from "./event/EventMgr";
import StoryMgr from "./story/StoryMgr";
import InputMgr from "./input/InputMgr";






export default class Engine {
    static root_node: cc.Node;
    static log_mgr: LogMgr;
    static engine_setting: EngineSetting;
    static cocos_setting: CocosSetting;
    static update_mgr: UpdateMgr;
    static time_sys: TimeSystem;
    static timer_mgr: TimerMgr;
    static event_mgr: EventMgr;
    static story_mgr: StoryMgr;
    static input_mgr: InputMgr;
    static Init(): void {

        // 添加常驻根节点
        Engine.root_node = cc.find("Engine");
        if(!Engine.root_node)
        {
            Engine.root_node = new cc.Node();
            Engine.root_node.name = "Engine";
        }
        cc.game.addPersistRootNode(Engine.root_node);

        // logMgr
        Engine.log_mgr =new LogMgr();
        Engine.log_mgr.Init();

        // 添加Setting模块
        Engine.engine_setting = new EngineSetting();
        Engine.engine_setting.Init();
        Engine.cocos_setting = new CocosSetting();
        Engine.cocos_setting.Init();

        // 添加Updater用于驱动游戏逻辑
        Engine.root_node.addComponent("Updater");
        Engine.update_mgr = new UpdateMgr();
        Engine.update_mgr.Init();

        //timeSystem
        Engine.time_sys = new TimeSystem();
        Engine.time_sys.Init();

        //timerMgr
        Engine.timer_mgr = new TimerMgr();
        Engine.timer_mgr.Init();

        //eventMgr
        Engine.event_mgr = new EventMgr();
        Engine.event_mgr.Init();

        //storyMgr
        Engine.story_mgr = new StoryMgr();
        Engine.story_mgr.Init();

        // inputMgr
        Engine.input_mgr = new InputMgr();
        Engine.input_mgr.Init();
    }
    static Update(dt: number): void {
        Engine.time_sys.Update(dt);
        Engine.timer_mgr.Update(dt);
        Engine.update_mgr.Update(dt);
    }
    // logMgr
    static LogInfo(info: string): void {Engine.log_mgr.LogInfo(info);}
    static LogDebug(info: string): void {Engine.log_mgr.LogDebug(info);}
    static LogWarn(info: string): void {Engine.log_mgr.LogWarn(info);}
    static LogError(info: string): void {Engine.log_mgr.LogError(info);}
    // update
    static AddUpdate(obj: any): void {Engine.update_mgr.AddUpdate(obj);}
    static DelUpdate(obj: any): void {Engine.update_mgr.DelUpdate(obj);}
    //timeSystem
    static GetEngineTime(): number {return Engine.time_sys.GetTime();}
    // eventMgr
    static get EventMgr(): EventMgr {return Engine.event_mgr;}
    // storyMgr
    static get StoryMgr(): StoryMgr {return Engine.story_mgr;}
    static RegisterStory(name: string, callback: Function): void {Engine.story_mgr.Register(name, callback);}
    static UnregisterStory(name: string): void {Engine.story_mgr.Unregister(name);}
    
    
}
