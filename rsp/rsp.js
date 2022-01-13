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

//버튼을 누른 도중에 다시 버튼을 입력할 경우에 발생하는 에러처리
let clickFlag = true;
const clickButton = () =>{
    if (clickFlag){
        clickFlag = false;
        clearInterval(intervalId);
        //점수 계산 및 화면 표시
        setTimeout( () =>{
            clickFlag = true;
            intervalId = setInterval(changeComputerHand, 50);
        }, 1000);
    };
};

$rock.addEventListener('click', clickButton);
$scissors.addEventListener('click', clickButton);
$paper.addEventListener('click', clickButton);

