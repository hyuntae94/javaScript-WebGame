let numOne = "";
let numTwo = "";
let operator = "";

const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');

//중복되는 부분
const onClickNumber = (number) => {
    return () => {
        if (!operator){
            numOne += number;
        }
        else{
            numTwo += number;
        }
        $result.value += number;
    }
}

document.querySelector('#num-0').addEventListener('click', onClickNumber('0'));
document.querySelector('#num-1').addEventListener('click', onClickNumber('1'));
document.querySelector('#num-2').addEventListener('click', onClickNumber('2'));
document.querySelector('#num-3').addEventListener('click', onClickNumber('3'));
document.querySelector('#num-4').addEventListener('click', onClickNumber('4'));
document.querySelector('#num-5').addEventListener('click', onClickNumber('5'));
document.querySelector('#num-6').addEventListener('click', onClickNumber('6'));
document.querySelector('#num-7').addEventListener('click', onClickNumber('7'));
document.querySelector('#num-8').addEventListener('click', onClickNumber('8'));
document.querySelector('#num-9').addEventListener('click', onClickNumber('9'));
document.querySelector('#plus').addEventListener();
document.querySelector('#minus').addEventListener();
document.querySelector('#divide').addEventListener();
document.querySelector('#mutiply').addEventListener();
document.querySelector('#clear').addEventListener();
document.querySelector('#calculate').addEventListener();
