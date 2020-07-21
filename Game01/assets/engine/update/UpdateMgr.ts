import Updater from "./Updater";

export default class UpdateMgr {
    updates: Set<any>;
    add_update_list: Array<any>;
    del_update_list: Array<any>;
    Init() {
        this.updates = new Set<any>();
        this.add_update_list = new Array<any>();
        this.del_update_list = new Array<any>();
    }
    AddUpdate(obj: any): void {
        this.add_update_list.push(obj);
    }
    DelUpdate(obj: any): void {
        this.del_update_list.push(obj);
    }
    Update(dt: number): void {
        for(let obj of this.del_update_list){
            this.updates.delete(obj);
        }
        for(let obj of this.add_update_list){
            this.updates.add(obj);
        }
        while(this.add_update_list.length > 0) {
            this.add_update_list.pop();
        }
        while(this.del_update_list.length > 0) {
            this.del_update_list.pop();
        }
        this.updates.forEach(function(obj){
            obj.Update(dt);
        })
    }
}
