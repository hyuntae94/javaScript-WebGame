const {body} = document;
const $table = document.createElement('table');
const $result = document.createElement('div'); //결과창
const $resetButton = document.createElement('button'); //리셋버튼

$resetButton.innerText = '다시하기'

const rows = [];

let turn = 'O';

const checkWinnerHandler = (target) => {
    let rowIndex = target.parentNode.rowIndex;
        cellIndex = target.cellIndex;
    let hasWinner = false; // 승자여부판별 변수
    
    //가로줄 검사
    if (
        rows[rowIndex][0].textContent === turn &&
        rows[rowIndex][1].textContent === turn &&
        rows[rowIndex][2].textContent === turn)
        {
            hasWinner = true;
        }
    //세로줄 검사
    if (
        rows[0][cellIndex].textContent === turn &&
        rows[1][cellIndex].textContent === turn &&
        rows[2][cellIndex].textContent === turn)
        {
            hasWinner = true;
        }
    //대각선 검사
    if (
        rows[0][0].textContent === turn &&
        rows[1][1].textContent === turn &&
        rows[2][2].textContent === turn 
    ) {
        hasWinner = true;
    }
    if (
        rows[0][2].textContent === turn &&
        rows[1][1].textContent === turn &&
        rows[2][0].textContent === turn
    ) {
        hasWinner = true;
    }
    return (hasWinner);
}

const checkWinnerAndDrawHandle = (target) => {
    const hasWinner = checkWinnerHandler(target);

    if (hasWinner){//승자가 있다면
        $result.innerText = turn === 'O' ? '플레이어의 승리' : '컴퓨터의 승리';
        $table.removeEventListener('click',tableClickHandler);
        $result.append(document.createElement('br'),$resetButton);
        return ;
    }
    //승자가 없다면
    //무승부인지 확인
    const draw = rows.flat().every((cell)=>cell.textContent);
    if (draw){
        $result.innerText = '무승부';
        $result.append(document.createElement('br'),$resetButton);
        return ;
    }
    //승자도 없고 무승부가 아니라면 현재 게임진행중
    turn = turn === 'O' ? 'X' : 'O';
}


const tableClickHandler = (event) => {
    if (event.target.textContent !== ""){//칸이 채워져 있다면
        alert('빈칸이 아닙니다!!');
        return ;
    }
    //빈칸이라면
    event.target.textContent = turn;    

    checkWinnerAndDrawHandle(event.target);

    //내가 선택하고 승무패 확인하고 컴퓨터가 선택하고 승무패 확인하고 반복
    if (turn === 'X'){
        const emptyCell = rows.flat().filter(v => !v.textContent);
        const randomCell = emptyCell[Math.floor(Math.random()*emptyCell.length)];
        randomCell.textContent = 'X';

        checkWinnerAndDrawHandle(randomCell);
    }
}


for (let i=0; i<3; i++){
    const $tr = document.createElement('tr');
    const cells = [];
    for (let j=0; j<3; j++){
        const $td = document.createElement('td');
        cells.push($td);
        $tr.appendChild($td);
    }
    rows.push(cells);
    $table.appendChild($tr);
    $table.addEventListener('click',tableClickHandler);
}

body.appendChild($table);
body.appendChild($result);

$resetButton.addEventListener('click', ()=> {
    window.location.reload();
})
