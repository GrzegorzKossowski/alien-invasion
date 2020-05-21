import { Explosion } from './Explosion';
import { setup } from './setup';

export class AlienExplosion extends Explosion {
    constructor(params) {
        super(params);        
    }

    init(){
        this.r = setup.alien.blastRadius;
        this.color0 = setup.alien.color0;
        this.color1 = setup.alien.color1;
        this.color2 = setup.alien.color2;
        this.timeout = setup.timeout;
        
        setTimeout(() => {
            this.isActive = false;
        }, this.timeout);
    }

}