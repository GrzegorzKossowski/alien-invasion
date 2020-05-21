import { setup } from './setup';

export class Hud {
    constructor(params) {
        this.ctx = params.ctx;
        this.color = "rgba(0,255,0, .7)";
        this.cw =  params.cw;
        this.ch = params.ch;
    }

    init() {
        this.color = setup.hud.color;
    }

    updateAliens(aliens) {
        let dangerAliens = aliens
        console.log(dangerAliens);

    }

    draw({stats, ...params}) {
        this.ctx.fillStyle = this.color;
        this.ctx.strokeStyle = this.color;
        this.ctx.lineWidth = .5;

        this.ctx.fillText(`victims:`, 30, 30);
        this.ctx.fillText(`${stats.victims}`, 75, 30);
        this.ctx.fillText(`shots:`, 30, 50);
        this.ctx.fillText(`${stats.shots}`, 75, 50);
        this.ctx.fillText(`kills:`, 30, 70);
        this.ctx.fillText(`${stats.kills}`, 75, 70);
        this.ctx.fillText(`ratio:`, 30, 90);
        this.ctx.fillText(`${stats.ratio} %`, 75, 90);

        this.ctx.beginPath();
        this.ctx.moveTo(20, 20);
        this.ctx.lineTo(this.cw - 60, 20);
        this.ctx.arcTo(this.cw - 20, 20, this.cw - 20, 40, 40);  // Create an arc
        this.ctx.lineTo(this.cw - 20, this.ch - 90);
        this.ctx.arcTo(this.cw - 20, this.ch - 50, this.cw - 60, this.ch - 50, 40);  // Create an arc
        this.ctx.lineTo(60, this.ch - 50);
        this.ctx.arcTo(20, this.ch - 50, 20, this.ch - 90, 40);  // Create an arc
        this.ctx.lineTo(20, 20);
        this.ctx.stroke();
    }
}