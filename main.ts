import BallGame from './src/ballgame';

const app = new BallGame();

window.addEventListener('load', app.WindowLoad);
window.addEventListener('resize', app.Resize);

app.Animate();