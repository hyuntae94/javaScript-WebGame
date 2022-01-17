const {body} = document;
const $table = document.createElement('table');
const $result = document.createElement('div'); //결과창
const rows = [];

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
}

body.appendChild($table);
body.appendChild($result);