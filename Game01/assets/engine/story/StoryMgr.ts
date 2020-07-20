
export default class StoryMgr {
    storys: Map<string, Function>;
    Init(): void {
        this.storys = new Map<string, Function>();
    }
    Get(name: string): Function {
        return this.storys.get(name);
    }
    Register(name: string, callback: Function): void {
        this.storys.set(name, callback);
    }
    Unregister(name: string): void {
        this.storys.delete(name);
    }
}
