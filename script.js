//c-132

const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 600);

const loop = setInterval(() => {

    console.log('loop');
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
   
    console.log(marioPosition);
     
    if (pipePosition <= 65 && pipePosition > 0 && marioPosition < 50 ) {
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './settings/game-over.png';
        mario.style.width = '50px'
        mario.style.marginLeft = '15px'; 

        clearInterval(loop);
    }

}, 10);

}

document.addEventListener('keydown', jump);