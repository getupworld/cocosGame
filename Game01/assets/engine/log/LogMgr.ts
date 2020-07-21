
export default class LogMgr {
    logs: Map<LogLevel, Array<string>>;

    Init(): void {
        this.logs = new Map<LogLevel, Array<string>>();
        this.logs.set(LogLevel.Info, new Array<string>());
        this.logs.set(LogLevel.Debug, new Array<string>());
        this.logs.set(LogLevel.Warn, new Array<string>());
        this.logs.set(LogLevel.Error, new Array<string>());
    }

    Log(lv: LogLevel, info: string): void {
        this.logs.get(lv).push(info);
        console.log(info);
        //cc.log(info);
    }
    LogInfo(info: string): void {
        this.Log(LogLevel.Info, info);
    }
    LogDebug(info: string): void {
        this.Log(LogLevel.Debug, info);
    }
    LogWarn(info: string): void {
        this.Log(LogLevel.Warn, info);
    }
    LogError(info: string): void {
        this.Log(LogLevel.Error, info);
    }
}


export enum LogLevel
{
    Info = 0,
    Debug = 1,
    Warn = 2,
    Error = 3,
}