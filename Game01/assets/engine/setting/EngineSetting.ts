
export default class EngineSetting {
    fps: number;
    Init(): void {
        this.SetFPS(30);
    }
    GetFPS(): number {
        return this.fps;
    }
    SetFPS(num: number): void {
        this.fps = num;
    }
}
    