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

let intervalId = setInterval(changeComputerHand, 50);
const scoreTable = {
    'scissors' : 1,
    'rock' : 0,
    'paper' : -1,
};


//버튼을 누른 도중에 다시 버튼을 입력할 경우에 발생하는 에러처리
let clickFlag = true;
let message = "";
let playerWin = 0;//내점수
let computerWin = 0;//컴퓨터 점수

const clickButton = (event) =>{
    if (clickFlag){
        clickFlag = false;
        clearInterval(intervalId);
        const myChoice = event.target.textContent === '가위' ?
            'scissors' : event.target.textContent === '바위' ?
            'rock' : 'paper';
        //점수 계산 및 화면 표시
        const scoreDiff = scoreTable[myChoice] - scoreTable[computerChoice];
        if ([2,-1].includes(scoreDiff)){//승리
            message = '승리';
            playerWin += 1;
        } 
        else if ([1,-2].includes(scoreDiff)){//패배
            message = '패배';
            computerWin += 1;
        }
        else {//무승부
            message = '무승부';
        }
        //5판 3선승제
        if (playerWin === 3){
            $score.textContent = `Winner -> player ${playerWin} : computer ${computerWin}`;
        }
        else if (computerWin === 3){
            $score.textContent = `player ${playerWin} : Winner -> computer${computerWin}`;
        }
        else {
            $score.textContent = `${message}! player ${playerWin} : computer ${computerWin}`;
            setTimeout( () =>{
                clickFlag = true;
                intervalId = setInterval(changeComputerHand, 50);
            }, 1000);
        }
        
    };
};

$rock.addEventListener('click', clickButton);
$scissors.addEventListener('click', clickButton);
$paper.addEventListener('click', clickButton);


