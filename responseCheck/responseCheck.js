const $screen = document.querySelector('#screen');
const $result = document.querySelector('#result');

const records = [];

let startTime = 0;
let endTime = 0;


$screen.addEventListener('click', ()=>{
    if ($screen.classList.contains('waiting')){
        //대기화면
        $screen.classList.replace('waiting','ready');
        $screen.textContent = '준비하세요';

        setTimeout(()=>{
            startTime = new Date();

            $screen.classList.replace('ready','now');
            $screen.textContent ='클릭하세요';
        }, Math.floor(Math.random()*1000) + 2000);
    }   
    else if ($screen.classList.contains('ready')){
        //준비화면
    }
    else if ($screen.classList.contains('now')){
        //클릭화면
        endTime = new Date();
        const timeGap = endTime - startTime;
        records.push(timeGap);
        const average = records.reduce((a,b)=>a+b)/records.length;
        $result.textContent = `현재 : ${timeGap}ms, 평균 : ${Math.round(average)}ms`;
        $screen.classList.replace('now','waiting');
        $screen.textContent = '클릭해서 시작하세요';
        // startTime = 0;
        // endTime = 0;    
    }
})