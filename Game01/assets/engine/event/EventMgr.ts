
export default class EventMgr {
    event_listener: Map<any, Map<number, Function>>;
    event_mgr_uuid: number;
    Init() {
        this.event_mgr_uuid = 0;
        this.event_listener = new Map<any, Map<number, Function>>();
    }
    GenUUID(): number {
        return ++ this.event_mgr_uuid;
    }
    Emit(event: any, data: any): void {
        let listener: Map<number, Function> = this.event_listener.get(event);
        if(!listener) return;
        listener.forEach(function(callback) {
            callback(data);
        });
    }

    BindEvent(event: any, callback: Function): number {
        let listener: Map<number, Function> = this.event_listener.get(event);
        if(!listener) {
            listener = new Map<number, Function>();
            this.event_listener.set(event, listener);
        }
        let uuid = this.GenUUID();
        listener.set(uuid, callback);
        return uuid;
    }

    UnbindEvent(event: any, uuid: number): void {
        let listener: Map<number, Function> = this.event_listener.get(event);
        if(listener && listener.has(uuid)) {
            listener.delete(uuid);
        }
    }
    Clear(): void {
        this.event_mgr_uuid = 0;
        this.event_listener.clear();
    }
}
