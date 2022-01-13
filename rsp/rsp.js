const $computer = document.querySelector('#computer');
const $scissors = document.querySelector('#scissors');
const $rock = document.querySelector('#rock');
const $paper = document.querySelector('#paper');
const $score = document.querySelector('#score');

const IMG_URL = './rsp.png';

$computer.style.background =  `url(${IMG_URL}) 0 0`;
$computer.style.backgroundSize = 'auto 200px';

const rspX = {
    scissors : '0',
    rock : '-225px',
    paper : '-425px',
};


//0.05초 마다 가위바위보 바꿔주기
let computerChoice = "scissors";
const changeComputerHand = () => {
    if (computerChoice === "rock"){
        computerChoice = "scissors";
    }
    else if (computerChoice === "scissors"){
        computerChoice = "paper";
    }
    else if (computerChoice === "paper"){
        computerChoice = "rock";
    }
    $computer.style.background = `url(${IMG_URL}) ${rspX[computerChoice]} 0`;
    $computer.style.backgroundSize = 'auto 200px';
}

setInterval(changeComputerHand, 50);