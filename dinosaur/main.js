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
let 점프중 = false;
let 점프timer = 0;

function 프레임마다실행할거(){
    requestAnimationFrame(프레임마다실행할거);
    timer++;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
    if (timer % 90   == 0){
        let cactus = new Cactus();
        cactusArr.push(cactus);
    }

    cactusArr.forEach((a,i) => {
        if (a.x < 0){
            cactusArr.splice(i,1);
        }
        a.x -= 3;
        a.draw();
    });

    // //스페이스바 누르면 점프
    if (점프중 === true){
        dino.y -= 3;
        점프timer += 3;
    }
    if (점프중 === false){
        if (dino.y < 200){
            dino.y += 2.4;
        }
    }
    if (점프timer > 100){
        점프중 = false;
        점프timer = 0;
    }

    dino.draw();
}
프레임마다실행할거();

document.addEventListener('keydown', function(e){
    if (e.code === 'Space'){
        점프중 = true;
    }
})
