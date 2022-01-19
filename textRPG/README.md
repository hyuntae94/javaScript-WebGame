<h1 align='middle'>RPG게임</h1>

## 🔎 ISSUE

```js
monster = JSON.parse(
            JSON.stringify(monsterList[Math.floor(Math.random()*monsterList.length)])
        );
//간단한 객체는 위 코드와같이 작성해도 되지만 성능도 느리고 함수나 Math, Date같은 객체를 복사할 수 없기에 Lodash같은 라이브러리를 사용한다.
```

```js
//깊은복사
//배열또는 객체의 깊은복사는 slice 또는 스프레드(...)연산자 사용
const array = [1,2,3];
const deepArray = array.slice() or [...array];

const dic = {1:'a',2:'b'};
const deepDic = {...dic};

//객체 또는 배열 내부에 객체가 존재할 경우
//스프레드(...)연산자, slice()를 사용하면 얕은복사가 된다.
//얕은복사란 가장 바깥 객체만 복사되고 내부 객체는 참조관계를 유지하는 복사이다.
//참조관계란 서로 다른 두 객체 또는 배열이 같은 값을 공유하고 있어 객체 중 하나라도 값이 바뀐다면 참조관계에 있는 다른 객체의 값도 바뀐다.
const dicInArray = [{1:'a'}, {2:'b'}];
const deepInArray = JSON.parse(JSON.stringify(dicInArray));

const dicInDic = { o : {p : 'q'}};
const deepInDic = JSON.parse(JSON.stringify(dicInArray));
```

