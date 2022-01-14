const $screen = document.querySelector('#screen');
const $result = document.querySelector('#result');

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
        $result.textContent = `${endTime-startTime}ms`;
        $screen.classList.replace('now','waiting');
        $screen.textContent = '클릭해서 시작하세요';
    }
})