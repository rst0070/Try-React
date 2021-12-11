# State and Lifecycle
_이 내용이 왜 필요한가?_
_rendering elements_ 에서 React Element는 수정이 불가함을 알았다. 
하지만 `state`와 `lifecycle methods`를 사용하면 재사용스타일의 코드를 작성할 수 있다.  

1. state 사용
2. lifecycle methods 추가
3. 올바르게 state를 사용하는 방법

## 1. state 사용
props를 바로 사용하는대신 `this.state`를 사용하자  
super에 props 전달하는것은 필수.  
```
export default class Tick extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date : Date.now()
        };
    }
    render(){
        return <p>it's {this.state.date}</p>
    }
}
```

## 2. Lifecycle methods
`React.Component`의 주요 lifecycle 메소드 두가지!  
오버라이드해서 해당 시기에 작동할 로직구현하면 된다. 
* `componentDidMount()` -  해당 컴포넌트가 렌더링되고 난 후 호출된다.
* `componentWillUnmount()` - 해당 컴포넌트가 해체될때.  
```
componentDidMount(){
    this.타이머아이디 = setInterval(
        () => this.tick(),
            1000
        );
    }

componentWillUnmount(){
    clearInterval(this.타이머아이디);
}
```

## 3. 올바르게 state를 사용하는 방법

### 3.1 `setState()`를 사용
아래와 같은 방식으로 state를 변경해야 react에 state가 변경됨을 알릴 수 있다.
```
this.setState({comment: 'Hello'});
```
  
### 3.2 비동기적 작동에 주의
`setState()`통해서 state가 변경되는것은 비동기적이다.  
따라서 callback function을 이용하여 setState()를 호출하자.
callback function의 파라미터
* `state` - 이전의 state( this.state )
* `props` - this.props
```
this.setState((state, props)=>{
    ...
})
```
callback 함수의 props가 this.props임을 통해 
생성자에서 `super(props)`가 `this.props = props`등 기반작업을 해놓았다는걸 알 수 있다.  
  
### 3.3 `setState()`는 state객체 전체를 바꾸는것이 아니다.
state에 서로 상관없는 두 정보를 담는다고 할때.
```
  componentDidMount() {
    ...
    this.setState({
        a : ...
    })
    ...
    this.setState({
        b : ...
    })
  }
```
a가 먼저 변경되고 b가 변경된다고 가정하면  
b가변경될때 a는 사라지는것이 아닌가? 하는 의문이든다.  
하지만 `setState()`는 a의 정보는 그대로 남겨두고 
b만 변경하도록 작동한다.

### 3.4 state를 이용하여 계층구조로 data를 전달하자
이를 통해 변경에 필요한 로직의 양을 줄일 수 있음.