import { Explosion } from './Explosion';
import { setup } from './setup';

export class RocketExplosion extends Explosion {
    constructor(params) {
        super(params);
    }

    init() {
        this.r = setup.rocket.blastRadius;
        this.color0 = setup.rocket.color0;
        this.color1 = setup.rocket.color1;
        this.color2 = setup.rocket.color2;
        this.timeout = setup.timeout;
        setTimeout(() => {
            this.isActive = false;
        }, this.timeout);
    }

}