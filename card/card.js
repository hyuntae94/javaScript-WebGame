const $wrapper = document.querySelector('#wrapper');

const total = 12;
const colors = ['red','orange','yellow','green','white','pink'];
let colorCopy = colors.concat(colors);
let shuffled = [];

const shuffle = () => {//무작위 카드 섞기
    while(colorCopy.length > 0){
        const randomIndex = Math.floor(Math.random()*colorCopy.length);
        shuffled = shuffled.concat(colorCopy.splice(randomIndex,1));
    }
}

const createCard = (idx) => {
    const card = document.createElement('div');
    card.className = 'card';
    const cardInner = document.createElement('div');
    cardInner.className = 'card-inner';
    const cardFront = document.createElement('div');
    cardFront.className = 'card-front';
    const cardBack = document.createElement('div');
    cardBack.className = 'card-back';
    cardBack.style.backgroundColor= shuffled[idx];
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);
    return card;
}

const startGame = () => {
    shuffle();
    for (let i = 0; i < total; i+= 1){
        const card = createCard(i);
        $wrapper.appendChild(card);
    }
}

startGame();
