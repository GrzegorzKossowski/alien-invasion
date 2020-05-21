import { setup } from './setup';

export class Movable {

    constructor(ctx) {
        this.ctx = ctx;
        this.y = 0;
        this.x = 0;
        this.size = 1;
        this.velocity = 0;
        this.xTarget = 0;
        this.yTarget = 0;
        this.xVect = 0;
        this.yVect = 0;
        this.dVect = 0;
        this.vJedn = 0;
        this.vxSpeed = 0;
        this.vySpeed = 0;
        this.color = "rgba(255,0,255,1)";
    }

    init(x, y) {
        this.x = x;
        this.y = y;
        this.vxSpeed = 0;
        this.vySpeed = 0;
    }

    speedVectorCount(targetX, targetY) {
        this.xTarget = targetX;//mousePos.x;
        this.yTarget = targetY;//mousePos.y;
        this.countActualPosition();
        this.countDistanceToTarget();
        this.vxSpeed = ((this.xVect * this.velocity) / this.dVect);
        this.vySpeed = ((this.yVect * this.velocity) / this.dVect);
    }

    countActualPosition() {
        this.xVect = this.xTarget - this.x;
        this.yVect = this.yTarget - this.y;
    }

    countDistanceToTarget() {
        this.dVect = Math.sqrt(this.xVect * this.xVect + this.yVect * this.yVect); //dlugosc wektora
    }

    explosionRangeCheck(targetX, targetY) {
        var distX = targetX - this.x;
        var distY = targetY - this.y;
        return Math.sqrt(distX * distX + distY * distY); //dlugosc wektora wybuchu
    }

    draw() {
        this.x += this.vxSpeed;
        this.y += this.vySpeed;
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x - this.size, this.y - this.size, 2 * this.size, 2 * this.size);
    }

}