import { Hud as HUD } from './Hud';
import { Alien } from './Alien';
import { AlienExplosion } from './AlienExplosion';
import { RocketExplosion } from './RocketExplosion';
import { Rocket } from './Rocket';
import { setup } from './setup';

export class Game {
    constructor() {
        this.canvas = document.querySelector('canvas');
        this.cw = this.canvas.width;
        this.ch = this.canvas.height;
        this.ctx = this.canvas.getContext("2d");
        this.grd = this.ctx.createLinearGradient(0, this.ch, 0, 0);
        this.ctx.font = "normal 12px Helvetica";
        this.ctx.fillStyle = "";
        this.ctx.textBaseline = "top";
        this.lastFrame = 0;
        this.delta = 0;
        this.timestep = 1000 / 60;
        this.genTime = 5000;
        this.mousePos = { x: 0, y: 0 };
        this.city = new Image();

        this.hud = null;
        this.aliens = [];
        this.alienExplosions = [];
        this.rockets = [];
        this.rocketExplosions = [];
        this.stats = {
            victims: 0,
            shots: 0,
            kills: 0,
            ratio: 0,
            ammo: 15,
            money: 150,
            calcRatio: function () {
                this.ratio = ((this.kills / this.shots) * 100).toFixed(2);
            },
            victimsRatio: function () {
                this.victims += Math.floor(Math.random() * 1000) + 1000;
            }
        }

    }

    init() {
        this.canvas.addEventListener("mousedown", e => this.handleMouseClick(e), false);
        this.grd.addColorStop(0, "rgb(70,100,100,.7)");
        this.grd.addColorStop(1, "rgb(0,0,0,0)");

        this.hud = new HUD({ ctx: this.ctx, cw: this.cw, ch: this.ch });
        this.hud.init();
        this.city.src = "./assets/img/city25.png";
        this.createAlien();

        this.reloader = 4;
        this.myInterval = null;
        this.rocketPrice = setup.rocket.price;
        this.myInterval = setInterval(() => {
            this.stats.money++;
        }, 1000);
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
        // remove rockets
        this.rockets.forEach(rocket => {
            rocket.checkIsActive();
            if (!rocket.isActive) {
                let explosion = new RocketExplosion({
                    ctx: this.ctx,
                    x: rocket.x,
                    y: rocket.y,
                    r: 20
                });
                explosion.init();
                this.alienExplosions.push(explosion);
                this.rockets.splice(this.rockets.indexOf(rocket), 1);
                this.stats.calcRatio();

                // dla każdego aliena, jeśli dystans mniejszy równy blast radius usuń
                this.aliens.forEach(alien => {
                    if (rocket.explosionRangeCheck(alien.x, alien.y) <= explosion.blastRadius) {
                        this.aliens.splice(this.aliens.indexOf(alien), 1);
                        this.stats.kills++;
                        this.stats.money += this.rocketPrice + Math.floor(this.rocketPrice * this.stats.ratio / 100);
                    }
                })
            }
        })
        // remove aliens
        this.aliens.forEach(alien => {
            if (alien.y >= this.ch) {
                let explosion = new AlienExplosion({
                    ctx: this.ctx,
                    x: alien.x,
                    y: alien.y
                });
                explosion.init();
                this.alienExplosions.push(explosion)
                this.aliens.splice(this.aliens.indexOf(alien), 1);
                this.stats.victimsRatio();
            }
        });
        // remove alienExplosions
        this.alienExplosions.forEach(explosion => {

            if (!explosion.isActive) {
                this.alienExplosions.splice(this.alienExplosions.indexOf(explosion), 1);
            }

        })
        // update aliens pos for HUD
        this.hud.updateAliens(this.aliens);
    }

    draw() {
        // clear context
        this.ctx.clearRect(0, 0, this.cw, this.ch)
        this.ctx.fillStyle = this.grd;
        this.ctx.fillRect(0, 0, this.cw, this.ch);
        // Draw the state of the world

        // draw aliens
        this.aliens.forEach(alien => alien.draw());

        // draw rockets
        this.rockets.forEach(rocket => rocket.draw())

        // draw city
        this.ctx.drawImage(this.city, 0, this.ch - 25);

        // draw alienExplosions
        this.alienExplosions.forEach(expl => expl.draw())

        //draw HUD
        this.hud.draw({ stats: this.stats });

        // draw rocket launcher
        this.ctx.fillStyle = "#ee0000";
        this.ctx.beginPath();
        this.ctx.arc(this.cw / 2, this.ch, 10, 1 * Math.PI, 0);
        this.ctx.fill()
        this.ctx.stroke();
        //reset color to white
        this.ctx.fillStyle = "rbga(255,255,255,1)";
    }

    handleMouseClick(event) {
        if (this.stats.ammo) {
            this.mousePos = this.getMousePos(event);
            this.createRocket();
            this.stats.ammo--;
        } else {
            this.reloadAmmo();
        }
    }
    
    reloadAmmo() {
        for(let i=0; i<15; i++) {
            if(this.stats.money >= setup.rocket.price) {
                this.stats.ammo++;
                this.stats.money -= setup.rocket.price;
            }
        }
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

    createRocket() {
        let rocket = new Rocket({
            ctx: this.ctx,
            mousePos: this.mousePos,
            cw: this.cw,
            ch: this.ch
        });
        rocket.init();
        this.rockets.push(rocket);
        this.stats.shots++;
        
    }

}