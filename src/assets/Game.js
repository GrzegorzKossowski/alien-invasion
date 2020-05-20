export class Game {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.cw = canvas.width;
        this.ch = canvas.height;
        this.lastFrame = 0;
        this.delta = 0;
        this.timestep = 1000 / 60;
        this.state = {};
    }

    init() {
        this.ctx.font = "20px Georgia";
        this.state = {
            x: this.cw / 2,
            y: this.ch / 2
        }
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
        this.state.x += (delta / 32)
        if (this.state.x > this.cw) {
            this.state.x -= this.cw
        }
    }

    draw() {
        // Draw the state of the world
        this.ctx.fillStyle = "red";
        this.ctx.clearRect(0, 0, this.cw, this.ch)
        this.ctx.fillRect(this.state.x - 2, this.state.y - 2, 2, 2)
        this.ctx.fillText(`x: ${Math.floor(this.state.x)}`, 10, 20);
    }

}