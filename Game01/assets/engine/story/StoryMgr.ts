
export default class StoryMgr {
    storys: Map<string, any>;
    Init(): void {
        this.storys = new Map<string, any>();
    }
    Get(name: string): any {
        return this.storys.get(name);
    }
    Register(name: string, callback: any): void {
        this.storys.set(name, callback);
    }
    Unregister(name: string): void {
        this.storys.delete(name);
    }
}
