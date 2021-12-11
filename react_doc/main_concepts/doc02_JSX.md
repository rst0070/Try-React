# Introducing JSX
1. 왜 JSX를 사용하는가?
2. JSX와 표현식: 표현식을 포함할 수 있는 표현식
3. JSX 태그의 속성, 자식 표현
4. JSX와 Injection Attack
5. JSX의 실체

## 1. 왜 JSX를 사용하는가?

## 2. JSX와 표현식: 표현식을 포함할 수 있는 표현식

## 3. JSX 태그의 속성, 자식 표현
### 3.1 JSX태그의 속성 지정하기
html처럼 문자열로 속성을 지정하는 방식과 
자바스크립트 표현식을 이용하는 방식이 있음.
ex)
```
const element = <div tabIndex="0"></div>;
const element = <img src={user.avatarUrl}></img>;
```
__Style을 String값으로 속성을 지정하면 오류가 발생하는 경우가 있다. 이유가 뭔지 정확히 모르겠음.__
JSX의 `style`을 문자열로 지정했는데 다른 방식으로 지정하라고 오류발생
```
const element = <h1 style="color: red">test element: {text}</h1>;
-> render할때 오류발생: The `style` prop expects a mapping from style properties to values, not a string

const element = <h1 style={{ color : 'red' }}>test element: {text}</h1>;
-> 정상 작동
```
  
__주의할 점__
JSX는 완전한 HTML이 아니기 때문에 JSX만의 속성 이름 표현 방식이 있는경우가 있다.
(class속성 대신 className을 사용해야한다든지..)  
이를 `camelCase`라고 함.  

### 3.2 JSX태그 자식 표현하기
그냥 html처럼 사용하면 됨.
```
const element = (
    <div style={{ color : 'red' }}>
        <h1>{text}</h1>
        <p>this is children</p>
    </div>
);
```

## 4. JSX: Prevents Injection Attacks
```
const title = response.potentiallyMaliciousInput;
// This is safe:
const element = <h1>{title}</h1>;
```
이런 코드가 있고 `element`를 렌더링 할려고 할때 
react dom은 element를 모두 검사하여 String 값으로 만든다.
예를 들어 html escape코드를 JSX문에 추가하였을 경우 해당 코드에 맞는 
문자로 변환되어 렌더링 된다.  
```
<h1>text&#32;asdsad</h1>
-> 렌더링 되면: "text asdsad"
```
따라서 inject을 하는 코드는 작동하지 않는다.  

## 5. JSX의 실체
```
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
//위와 아래의 두 코드는 같음 결론적으로 같은 객체로 변환됨.
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```