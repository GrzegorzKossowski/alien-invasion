import { Game } from './assets/Game';
import './styles/styles.css';

// const canvas = document.querySelector('canvas');
const theGame = new Game();
theGame.init();
requestAnimationFrame(timestamp => theGame.mainLoop(timestamp));