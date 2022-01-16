const $screen = document.querySelector('#screen');
const $result = document.querySelector('#result');

const records = [];

let startTime = 0;
let endTime = 0;
let timeoutId = 0;

$screen.addEventListener('click', ()=>{
    if ($screen.classList.contains('waiting')){
        //대기화면
        $screen.classList.replace('waiting','ready');
        $screen.textContent = '준비하세요';

        timeoutId = setTimeout(() => {
            startTime = new Date();

            $screen.classList.replace('ready','now');
            $screen.textContent ='클릭하세요';
        }, Math.floor(Math.random()*1000) + 2000);
    }   
    else if ($screen.classList.contains('ready')){
        //준비화면
        clearTimeout(timeoutId);
        $screen.classList.replace('ready','waiting');
        $screen.textContent = '클릭해서 시작하세요';
        alert('초록색 화면이 나오면 클릭해야 합니다!!!!!!');
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
        
        const topFive = records.sort((a,b)=>a-b).slice(0,5);
        topFive.forEach((v,i)=>{
            $result.append(document.createElement('br'),
            `${i+1}위 : ${v}ms`);   
        })
        // startTime = 0;
        // endTime = 0;    
    }
})