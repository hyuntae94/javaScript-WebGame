const {body} = document;
const $table = document.createElement('table');
const $result = document.createElement('div'); //결과창
const rows = [];

let turn = 'O';

const tableClickHandler = (event) =>{
    if (event.target.textContent !== ""){
        console.log('빈칸이 아닙니다');
    }
    else {
        event.target.textContent = turn;
        turn = turn === 'O' ? 'X' : 'O';
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