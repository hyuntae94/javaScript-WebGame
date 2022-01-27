const $wrapper = document.querySelector('#wrapper');

const colors = ['red','orange','yellow','green','white','pink','purple','lime','aqua','blueviolet'];
const totalCard = Number(prompt('생성 카드 수를 입력하세요. 최대 카드수는 20장입니다.'))
const total = totalCard;
let colorCopy = [];
let shuffled = [];
let clicked = [];
let completed = [];
let clickable = false;
let startDate;


const shuffle = () => {//무작위 카드 섞기
    for (let i = 0; i < total/2; i++){//10종류중 x장만큼 랜덤 뽑기
        const randomIndex = Math.floor(Math.random()*colors.length);
        colorCopy = colorCopy.concat(colors.splice(randomIndex,1));
    }
    colorCopy = colorCopy.concat(colorCopy);
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

function onClickCard(){
    if (!clickable || completed.includes(this) || clicked[0] === this){
        return ;
    }

    this.classList.toggle('flipped');
    clicked.push(this);
    if (clicked.length !==2) return ;
    const firstBackColor = clicked[0].querySelector('.card-back').style.backgroundColor;
    const secondBackColor = clicked[1].querySelector('.card-back').style.backgroundColor

    if (firstBackColor === secondBackColor){//카드가 같은 경우
        completed.push(clicked[0]);
        completed.push(clicked[1]);
        clicked = [];
        if (completed.length !== total){
            return ;
        }
        //카드를 다 맞춘경우
        const endDate = new Date();
        setTimeout(()=>{
            alert(`축하합니다! ${parseInt((endDate-startDate)/1000)}초 걸렸습니다`);
            resetGame();
        },1000);
        return ;
    }

    //카드가 서로다른 경우
    clickable = false;
    setTimeout(()=>{
        clicked[0].classList.remove('flipped');
        clicked[1].classList.remove('flipped');
        clicked = [];
        clickable = true;
    },500);
}

const startGame = () => {
    if (totalCard % 2 !==0 || totalCard > 20) {
        alert('짝수값이여야 합니다.')
        return ;
    }
    shuffle();
    for (let i = 0; i < total; i++){
        const card = createCard(i);
        card.addEventListener('click',onClickCard);
        $wrapper.appendChild(card);
    }
    
    document.querySelectorAll('.card').forEach((card,index)=>{
        setTimeout(()=>{
            card.classList.add('flipped')
        },1000+100*index);
    })

    setTimeout(()=>{
        document.querySelectorAll('.card').forEach((card,index)=>{
            card.classList.remove('flipped');
        })
        clickable = true;
        startDate = new Date();
    },5000)
}

function resetGame(){
    $wrapper.innerHTML='';
    colorCopy = colors.concat(colors);
    shuffled = [];
    completed = [];
    clickable = false;
    startGame();
}

startGame();
