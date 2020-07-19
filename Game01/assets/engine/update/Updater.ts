import Engine from "../Engine";

const {ccclass} = cc._decorator;

@ccclass
export default class Updater extends cc.Component {

    update(dt: number): void
    {
        Engine.Update(dt);
    }
}
