const number = Number(prompt('참가자는 몇 명인가요?'));
const $input = document.querySelector('#text');
const $button = document.querySelector('#btn');
const $word = document.querySelector('#word');
const $order = document.querySelector('#order');
let word = "";    //제시어
let newWord = ""; //입력된 단어

const onClickBtn = () => {
    if(!word){//제시어가 비어있다.
        word = newWord; //입력한 단어는 제시어가 된다.
        $word.textContent = word; //제시어에 단어가 표시된다.
        const order = Number($order.textContent);
        if (order+1 > number){
            $order.textContent = 1;
        } 
        else
            $order.textContent = order+1;
        //입력창을 비우고 커서를 둔다.
        $input.value = '';
        $input.focus();
    }
    else{//제시어가 존재한다.
        if (word[word.length -1] === newWord[0]){//단어가 이어진 경우
            word = newWord;
            $word.textContent = word;
            const order = Number($order.textContent);
            if (order+1 > number){
                $order.textContent = 1;
            } 
            else
                $order.textContent = order+1;
        }
        else{//두 단어가 이어지지 않는 경우
            alert('올바르지 않는 단어입니다!')
            
            //입력창을 비우고 커서를 둔다.
            $input.value = '';
            $input.focus();
        }
    }
}
const onInput = (e) => {
    newWord = e.target.value;
}

$button.addEventListener('click', onClickBtn);
$input.addEventListener('input', onInput);
