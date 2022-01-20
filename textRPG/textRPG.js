const $startScreen = document.querySelector('#start-screen');
const $gameMenu = document.querySelector('#game-menu');
const $battleMenu = document.querySelector('#battle-menu');
//hero
const $heroName = document.querySelector('#hero-name');
const $heroLevel = document.querySelector('#hero-level');
const $heroHp = document.querySelector('#hero-hp');
const $heroXp = document.querySelector('#hero-xp');
const $heroAtt = document.querySelector('#hero-att');
//monster
const $monsterName = document.querySelector('#monster-name');
const $monsterHp = document.querySelector('#monster-hp');
const $monsterAtt = document.querySelector('#monster-att');
//message
const $message = document.querySelector('#message');

class Game{
    constructor(name){
        this.monster = null;
        this.hero = null;
        this.monsterList = [
            {name:'슬라임',hp:25,att:10,xp:10},
            {name:'스켈레톤',hp:50,att:15,xp:20},
            {name:'마왕',hp:150,att:35,xp:50},
        ];
    }
}

class Hero{
    constructor(game,name){
        this.game = game;
        this.name = name;
        this.lev = 1;
        this.maxHp = 100;
        this.hp = 100;
        this.xp = 0;
        this.att = 10;
    }
    attack(target){
        target.hp -= this.att;
    }
    heal(monster){
        this.hp += 20;
        this.hp -= monster.att;
    }
}

class Monster{
    constructor(game,name,hp,att,xp){
        this.game = game;
        this.name = name;
        this.maxHp = hp;
        this.att = att;
        this.xp = xp;
    }
    attack(target){
        target.hp -= this.att;
    }
}

let game = null;
$startScreen.addEventListener('submit', (event)=>{
    event.preventDefault();
    const name = event.target['name-input'].value;
    game = new Game(name);
})











// const hero = {
//     name : '',
//     lev : 1,
//     maxHp: 100,
//     hp: 100,
//     xp: 0,
//     att: 10,
//     attack(monster){
//         monster.hp -= this.att;
//         this.hp -= monster.att;    
//     },
//     heal(monster){
//         this.hp += 20;
//         this.hp -= monster.att;
//     },    
// };

// let monster = null;
// const monsterList = [
//     {name:'슬라임',hp:25,att:10,xp:10},
//     {name:'스켈레톤',hp:50,att:15,xp:20},
//     {name:'마왕',hp:150,att:35,xp:50},
// ];


// $startScreen.addEventListener('submit',(event)=>{
//     event.preventDefault();
//     const name = event.target['name-input'].value;
//     $startScreen.style.display = 'none';
//     $gameMenu.style.display ='block';
//     $heroName.textContent = name;
//     $heroLevel.textContent = `${hero.lev}Lv`;
//     $heroHp.textContent = `HP: ${hero.hp}/${hero.maxHp}`;
//     $heroXp.textContent = `XP: ${hero.xp}/${hero.lev*15}`;
//     $heroAtt.textContent = `ATT: ${hero.att}`;
//     hero.name = name;
// });

// $gameMenu.addEventListener('submit',(event)=>{
//     event.preventDefault();
//     const input = event.target['menu-input'].value;
//     if (input === '1'){
//         $gameMenu.style.display ='none';
//         $battleMenu.style.display ='block';
//         monster = JSON.parse(
//             JSON.stringify(monsterList[Math.floor(Math.random()*monsterList.length)])
//         );
//         monster.maxHp = monster.hp;
//         $monsterName.textContent = monster.name;
//         $monsterHp.textContent = `HP: ${monster.hp}/${monster.maxHp}`;
//         $monsterAtt.textContent = `ATT: ${monster.att}`;    
//     }
// });

// $battleMenu.addEventListener('submit', (event)=>{
//     event.preventDefault();
//     const input = event.target['battle-input'].value;
//     if (input === '1'){
//         hero.attack(monster);
//         monster.attack(hero);
//         $heroHp.textContent = `${hero.hp}/${hero.maxHp}`;
//         $monsterHp.textContent = `${monster.hp}/${monster.maxHp}`;
//         $message.textContent = `${hero.att}의 데미지를 주고 ${monster.att}의 `
//     }
// })