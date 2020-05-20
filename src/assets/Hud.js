export class Hud {
    constructor(params) {
        this.ctx = params.ctx;
        this.color = "rgba(255,255,255,1)";
    }

    draw({mousePos, ...params}) {
        this.ctx.fillStyle = this.color;
        this.ctx.fillText(`x: ${mousePos.x}`, 10, 10);
        this.ctx.fillText(`x: ${mousePos.y}`, 10, 30);
    }
}