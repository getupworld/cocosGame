import Engine from "../Engine";

export default class TimerMgr {
    timer_mgr_uuid: number;
    onceTimerMap: Map<number, Function>;
    loopTimerMap: Map<number, Function>;
    Init(): void {
        this.timer_mgr_uuid = 0;
        this.onceTimerMap = new Map<number, Function>();
        this.loopTimerMap = new Map<number, Function>();
    }
    GenUUID(): number {
        return ++ this.timer_mgr_uuid;
    }
    Update(dt: number): void {

    }
    callOnce(time: number, callback: Function): number {
        let uuid = this.GenUUID();
        this.onceTimerMap.set(uuid, callback);

        return uuid;
    }
}
