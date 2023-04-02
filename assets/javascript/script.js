const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}
document.addEventListener('keydown', jump);

const loop = setInterval(() => {
    
    const pipePostion = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if( pipePostion <= 35 && pipePostion > 0 && marioPosition < 70){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePostion}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = 'assets/img/game-over.png';
        mario.style.width = '40px';
        mario.style.marginLeft = '10px';

        clearInterval(loop);
    }
}, 10);