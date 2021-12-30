const number = Number(prompt('참가자는 몇 명인가요?'));
const $input = document.querySelector('#text');
const $button = document.querySelector('#btn');
const $word = document.querySelector('#word');

let word = "";    //제시어
let newWord = ""; //입력된 단어

const onClickBtn = () => {
    if(!word){//제시어가 비어있다.
        word = newWord; //입력한 단어는 제시어가 된다.
        $word.textContent = word; //제시어에 단어가 표시된다.
    }
    else{//제시어가 존재한다.
    }
}
const onInput = (e) => {
    newWord = e.target.value;
}

$button.addEventListener('click', onClickBtn);
$input.addEventListener('input', onInput);
