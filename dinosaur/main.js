let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;


let dino = {
    x : 10,
    y : 200,
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

class Cactus{
    constructor(){
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

let timer = 0;
let cactusArr = [];

function 프레임마다실행할거(){
    requestAnimationFrame(프레임마다실행할거);
    timer++;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
    if (timer % 120 == 0){
        let cactus = new Cactus();
        cactusArr.push(cactus);
    }

    cactusArr.forEach(a => {
        a.x--;
        a.draw();
    });

    dino.draw();
}
프레임마다실행할거();
