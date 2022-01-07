<h1 align='middle'>계산기</h1>

## 🚦순서도
```js
1. 숫자1,숫자2,연산자 변수 생성
2. 숫자버튼클릭
3. 연산자 변수가 비어있는가?
(Y)
    숫자1에 저장
(N)
    숫자2에 저장
4. 연산자버튼클릭
5. 숫자1변수에 값이 존재하는가?
(Y)
    연산자변수에 저장
(N)
    alert
6. = 버튼 클릭
7. 숫자2변수에 값이 존재하는가?
(Y)
    값을 계산하고 화면에 출력
    결과값을 숫자1에 저장
    숫자2 초기화
    연산자값 초기화
    -> 4번부터 반복
(N)
    alert
    -> 2번부터 반복
```

## 🔎 Issue ##

### 1)프로그램 실행시 함수작동
```js
const onClickOperator = (op) => {
    if (numOne){
        operator = op;
        $operator.value = op;
    } 
    else{
        alert('숫자를 먼저 입력하세요!');
    }
}

document.querySelector('#plus').addEventListener('click',onClickOperator('+'));

//문제 원인
-프로그램 작동 시 onClickOperator함수가 실행되어 에러 발생

const onClickOperator = (op) => {
    return () => {
        if (numOne){
            operator = op;
            $operator.value = op;
        } 
        else{
            alert('숫자를 먼저 입력하세요!');
        }
    }
}
//문제해결
함수의 반환값을 함수로 만들어 반환하여 에러 해결
```