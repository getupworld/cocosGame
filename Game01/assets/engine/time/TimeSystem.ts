import Engine from "../Engine";

export default class TimeSystem {
    time: number;
    Init(): void {
        this.time = 0;
    }
    Update(dt: number): void {
        this.time += dt;
    }
    GetTime(): number {
        return this.time;
    }
}
