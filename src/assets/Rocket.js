import { Movable } from './Movable';
import { setup } from './setup';

export class Rocket extends Movable {
    constructor({ ctx, mousePos, ...params }) {
        super(ctx);
        this.cw = params.cw;
        this.ch = params.ch;
        this.color = "rgba(255,0,0,1)";
        this.x = params.cw / 2;
        this.y = params.ch;
        this.velocity = .5;
        this.xTarget = mousePos.x;
        this.yTarget = mousePos.y;
        this.isActive = true;
    }

    checkIsActive() {
        this.countActualPosition()
        this.countDistanceToTarget();
        if(this.dVect < 5) this.isActive = false;
    }

    init() {
        this.size = setup.rocket.size;
        this.color = setup.rocket.color;
        this.velocity = setup.rocket.velocity;
        this.speedVectorCount(this.xTarget, this.yTarget);
    }

}