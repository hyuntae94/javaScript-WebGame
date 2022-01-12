const $result = document.querySelector('#result');
const $bonus = document.querySelector('#bonus');

const candidate = Array(45).fill().map((_,i)=> i+1);
const shuffle = [];

//45개의 숫자 무작위로 섞기
while (candidate.length > 0){
    const randomIndex = Math.floor(Math.random()*candidate.length);
    shuffle.push(candidate[randomIndex]);
    candidate.splice(randomIndex,1);
}