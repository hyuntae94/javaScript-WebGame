const $form = document.querySelector('#form');
const $input = document.querySelector('#input');
const $logs = document.querySelector('#logs');

const numbers = [1,2,3,4,5,6,7,8,9];
const answer = [];

//무작위 숫자 4개 뽑기(중복X)
for (let i=0; i<4; i++){
    const index = Math.floor(Math.random()*numbers.length);
    answer.push(numbers[index]);
    numbers.splice(index,1);
}
