import { Game } from './assets/Game';
import './styles/styles.css';

const canvas = document.querySelector('canvas');
const theGame = new Game(canvas);

theGame.init();
requestAnimationFrame((timestamp => theGame.mainLoop(timestamp)));