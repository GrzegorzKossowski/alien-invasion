import { setup } from './setup';

export class Explosion {
    constructor({ctx, r = 60, ...params}) {
        this.ctx = ctx;
        this.r = r;
        this.blastRadius = r;
        this.x = params.x;
        this.y = params.y;
        this.color0 = "";
        this.color1 = "";
        this.color2 = "";
        this.timeout = 5000;
        this.opacity = 1;
        this.isActive = true;
    }

    draw() {
        let x = this.x,
            y = this.y,
            r = this.r;
        const grd = this.ctx.createRadialGradient(x, y, 0, x, y, r);
        grd.addColorStop(0, this.color0);
        grd.addColorStop(.4, this.color1);
        grd.addColorStop(1, this.color2);
        this.ctx.beginPath();
        this.ctx.arc(x, y, r, 2 * Math.PI, 0);
        this.ctx.fillStyle = grd;
        this.ctx.fill()
    }


}