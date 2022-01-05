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
    값을계산하고 화면에 출력
(N)
    alert
```

## 🔎 Issue ##

### 1)프로그램 실행시 함수작동
```js
const onClickNumber = (number) => {
    if (!operator){
        numOne += number;
    }
    else{
        numTwo += number;
    }
    $result.value += number;
}

document.querySelector('#num-0').addEventListener('click', onClickNumber('0'));

//문제 원인
-프로그램 작동 시 onClickNumber함수가 실행되어 계산기에 0이 나타나는 문제

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
//문제해결
return () => {} 사용하여 실행 대기상태인 함수로 만들어 해결해 줌.
```