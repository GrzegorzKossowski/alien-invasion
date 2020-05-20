import { Movable } from './Movable';
import { alienSetup } from './alienSetup'

export class Alien extends Movable {

    constructor(params) {
        super(params.ctx);
        this.color = "rgba(255,0,0,1)";
        this.x = Math.round(Math.random() * params.cw);
        this.velocity = .3;
        this.xTarget = Math.round(Math.random() * (params.cw - 100) + 100);
        this.yTarget = params.ch;
    }
    
    init() {
        this.size = alienSetup.size;
        this.speedVectorCount(this.xTarget, this.yTarget);
    }

}