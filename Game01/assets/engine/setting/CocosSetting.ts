
export default class CocosSetting {
    displayStats: boolean;
    Init(): void {
        this.SetDisplayStats(false);
    }
    // 设置左下角隐藏
    SetDisplayStats(sw: boolean): void {
        cc.debug.setDisplayStats(sw);
        this.displayStats = sw;
    }
}
