import { Hud as HUD } from './Hud';
import { Alien } from './Alien'

export class Game {
    constructor() {
        this.canvas = document.querySelector('canvas');
        this.ctx = this.canvas.getContext("2d");
        this.ctx.font = "normal bold 20px Helvetica";
        this.ctx.fillStyle = "";
        this.ctx.textBaseline = "top";
        this.cw = this.canvas.width;
        this.ch = this.canvas.height;
        this.lastFrame = 0;
        this.delta = 0;
        this.timestep = 1000 / 60;
        this.genTime = 5000;
        this.mousePos = {x: 0, y: 0};

        this.hud = null;
        this.aliens = [];

    }

    init() {
        this.canvas.addEventListener("mousedown", e => this.handleMouseClick(e), false);
        this.hud = new HUD({ ctx: this.ctx });
        this.createAlien();
    }

    mainLoop(timestamp) {
        let numUpdateSteps = 0;
        // roznica miedzy aktualna klatka a poprzednia
        this.delta += timestamp - this.lastFrame;
        // timestamp aktualnej klatki
        this.lastFrame = timestamp;
        // petla gry
        while (this.delta >= this.timestep) {
            this.update(this.timestep);
            this.delta -= this.timestep;
            if (++numUpdateSteps >= 240) {
                this.delta = 0;
                break;
            }
        }
        this.draw();
        requestAnimationFrame((timestamp) => this.mainLoop(timestamp));
    }

    update(delta) {
        // Update the state of the world for the elapsed time since last render
        this.aliens.forEach(alien => {
            if (alien.y > this.ch) {
                this.aliens.splice(this.aliens.indexOf(alien), 1);
            }
        })
    }

    draw() {
        // clear context
        this.ctx.clearRect(0, 0, this.cw, this.ch)
        // Draw the state of the world

        this.aliens.forEach(alien => alien.draw());

        //draw HUD
        this.hud.draw({ mousePos: this.mousePos});

        //reset color to white
        this.ctx.fillStyle = "rbga(255,255,255,1)";
    }

    handleMouseClick(event) {
        this.mousePos = this.getMousePos(event);
        // TODO: send rocket here
        // ...
    }

    getMousePos(evt) {
        let rect = this.canvas.getBoundingClientRect();
        return {
            x: Math.floor(evt.clientX - rect.left),
            y: Math.floor(evt.clientY - rect.top)
        };
    }

    createAlien() {
        let alien = new Alien({
            ctx: this.ctx,
            cw: this.cw,
            ch: this.ch
        });
        alien.init();
        this.aliens.push(alien);
        if (this.genTime > 1000) {
            this.genTime -= Math.floor(Math.random() * 100) + 100;
        }
        setTimeout(() => {
            this.createAlien();
        }, (Math.random() * (this.genTime - 1000) + 1000));
    }

}