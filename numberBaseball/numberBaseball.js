const $form = document.querySelector('#form');
const $input = document.querySelector('#input');
const $logs = document.querySelector('#logs');

const numbers = [1,2,3,4,5,6,7,8,9];
const answer = [];//무작위 4개 숫자 저장
const tries = [];//현재까지의 모든 입력값 저장

//무작위 숫자 4개 뽑기(중복X)
for (let i=0; i<4; i++){
    const index = Math.floor(Math.random()*numbers.length);
    answer.push(numbers[index]);
    numbers.splice(index,1);
}

function checkInput(input){
    if (input.length !==4 || new Set(input).size !==4){
        return alert('중복되지 않는 4자리 숫자를 입력해 주세요');
    }
    else if (tries.includes(input)){
        return alert('이미 시도한 값입니다');
    }
    return 1;
}

$form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const value = $input.value;
    $input.value = '';
    const valid = checkInput(value);
    if (valid){
        tries.push(value);
    }
})

