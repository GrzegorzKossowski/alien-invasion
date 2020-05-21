import { Movable } from './Movable';
import { setup } from './setup';

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
        this.size = setup.alien.size;
        this.color =  setup.alien.color;
        this.velocity = (setup.alien.minVelocity + (setup.alien.maxVelocity - setup.alien.minVelocity) * Math.random()).toFixed(2);
        this.speedVectorCount(this.xTarget, this.yTarget);
    }

}