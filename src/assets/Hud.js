import { setup } from './setup';

export class Hud {
    constructor(params) {
        this.ctx = params.ctx;
        this.color = "rgba(0,255,0, .7)";
        this.cw =  params.cw;
        this.ch = params.ch;
        this.dangerAliens = []
    }

    init() {
        this.color = setup.hud.color;
        this.color1 = setup.hud.color1;
    }

    updateAliens(aliens) {
        this.dangerAliens = [].concat(aliens.filter(alien => alien.y > (this.ch/3)*2));
    }

    draw({stats, ...params}) {
        this.ctx.font = "normal 12px Helvetica";
        this.ctx.fillStyle = this.color;
        this.ctx.strokeStyle = this.color;
        this.ctx.lineWidth = .5;
        
        this.drawAmmo(stats.ammo);
        
        this.ctx.font = '900 16px "Font Awesome 5 Free"';
        this.ctx.fillText("\uF4b9", 45, 500);
        this.ctx.fillText(`${stats.money} $`, 65, 500);

        
        this.ctx.font = '900 12px "Font Awesome 5 Free"';
        this.ctx.fillText("\uF654", 30, 30);
        this.ctx.fillText("\uF05b", 30, 50);
        // this.ctx.fillText("\uF714", 30, 70);
        this.ctx.fillText("\uF541", 30, 90);
        this.ctx.font = '900 12px "Font Awesome 5 Brands"';
        this.ctx.fillText("\uF281", 30, 70);

        this.ctx.fillText(`victims:`, 45, 30);
        this.ctx.fillText(`${stats.victims}`, 90, 30);
        this.ctx.fillText(`shots:`, 45, 50);
        this.ctx.fillText(`${stats.shots}`, 90, 50);
        this.ctx.fillText(`kills:`, 45, 70);
        this.ctx.fillText(`${stats.kills}`, 90, 70);
        this.ctx.fillText(`ratio:`, 45, 90);
        this.ctx.fillText(`${stats.ratio} %`, 90, 90);

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
        

        if(this.dangerAliens.length) {
            this.ctx.strokeStyle = this.color1;
            this.dangerAliens.forEach(alien => {
                this.ctx.beginPath();
                this.ctx.arc(alien.x, alien.y, 15, 0.6 * Math.PI, 0.4 * Math.PI);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.arc(alien.x, alien.y, 10, 1.5 * Math.PI, 1 * Math.PI);
                this.ctx.lineTo(alien.x - 70, alien.y);
                this.ctx.stroke();
                this.ctx.font = "normal 8px Helvetica";
                this.ctx.fillText(`DANGER`, alien.x - 70, alien.y - 10);
            })            
        }


    }

    drawAmmo(ammo) {
        this.ctx.strokeRect(40, 120, 30, 300);
        for (let i=0; i < ammo; i++) {
            this.ctx.font = '900 12px "Font Awesome 5 Free"';
            this.ctx.translate(50, 400 - i*20);
            this.ctx.rotate(45 * Math.PI / 180);
            this.ctx.fillText("\uF135", 0, 0);
            this.ctx.rotate(-45 * Math.PI / 180);
            this.ctx.translate(-50, -400 + i*20);
            this.ctx.font = "normal 8px Helvetica";
            this.ctx.fillText(i+1, 58, 410 - i*20);
        }
        if(!ammo) {
            this.ctx.font = '900 18px "Font Awesome 5 Free"';
            this.ctx.fillText("\uF05e", 43, 430);
            this.ctx.fillText("\uF218", this.cw/2 - 60, this.ch/2);

            this.ctx.font = "normal 20px Helvetica";
            this.ctx.fillText("RELOAD", this.cw / 2 - 30, this.ch / 2);
        }
    }

}