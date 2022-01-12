const $result = document.querySelector('#result');
const $bonus = document.querySelector('#bonus');

const candidate = Array(45).fill().map((_,i)=> i+1);
const shuffle = [];

//45개의 숫자 무작위로 섞기
while (candidate.length > 0){
    const randomIndex = Math.floor(Math.random()*candidate.length);
    shuffle.push(candidate[randomIndex]);
    candidate.splice(randomIndex,1);
}

const winBalls = shuffle.slice(0,6).sort((a,b)=> a-b);
const bonus = shuffle[6];

const drawBall = (number, $parent) =>{
    const $ball = document.createElement('div');
    $ball.className = 'ball';
    $ball.textContent = number;
    $parent.appendChild($ball);
}

//6개의 숫자를 1초마다 공개한다.
for (let i=0; i<winBalls.length; i++){
    setTimeout(()=>{
        drawBall(winBalls[i], $result)
    }, 1000*(i+1));    
}

//마지막으로 보너스1개의 숫자를 공개한다.
setTimeout(()=>{
    drawBall(bonus, $bonus)},7000);