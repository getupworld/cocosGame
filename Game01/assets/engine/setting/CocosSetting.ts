
export default class CocosSetting {
    Init(): void {
        this.SetDisplayStats(false);
    }
    // 设置左下角隐藏
    SetDisplayStats(sw: boolean): void {
        cc.debug.setDisplayStats(sw);
    }
    IsDisplayStats(): boolean {
        return cc.debug.isDisplayStats();
    }
}
