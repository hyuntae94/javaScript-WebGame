const $form = document.querySelector('#form');
const $input = document.querySelector('#input');
const $logs = document.querySelector('#logs');

const totalTryChance = 10;//시도가능한 총 횟수
const numbers = [1,2,3,4,5,6,7,8,9];//컴퓨터가 뽑을 수 있는 숫자를 담고있는 배열
const answer = [];//무작위 4개 숫자 저장
const tries = [];//현재까지의 모든 입력값 저장

//무작위 숫자 4개 뽑기(중복X)
for (let i=0; i<4; i++){
    const index = Math.floor(Math.random()*numbers.length);
    answer.push(numbers[index]);
    numbers.splice(index,1);
}

//입력받은 숫자가 적합한지 확인
const checkInput = (input) => {
    if (input.length !==4 || new Set(input).size !==4){
        return alert('중복되지 않는 4자리 숫자를 입력해 주세요');
    }
    else if (tries.includes(input)){
        return alert('이미 시도한 값입니다');
    }
    return 1;
}
//스트라이크,볼을 확인하여 화면에 출력
const strikeBall = (value) =>{
    let strike = 0;
    let ball   = 0;

    for (let i=0; i<4; i++){
        const index = value.indexOf(answer[i]);
        if (index !== -1){
            if (index === i){
                strike += 1;
            }
            else {
                ball += 1;
            }
        }
    }
    $logs.append(`${value} : ${strike} 스트라이트 ${ball} 볼`, document.createElement('br'),
                    ` 남은 기회: ${totalTryChance-tries.length}`,document.createElement('br'));
}

$form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const value = $input.value;
    $input.value = '';
    const valid = checkInput(value);
    if (valid){
        tries.push(value);
    }
    else return;
    if (answer.join('') === value){
        $logs.textContent = '홈런';
        return ;
    }

    if (tries.length >= totalTryChance){
        const message = document.createTextNode(`패배! 정답은 ${answer.join('')}`);
        $logs.appendChild(message);
        return ;
    }

    //스트라이크,볼 판정
    strikeBall(value);
})

