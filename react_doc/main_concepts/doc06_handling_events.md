# Handling Events
react element의 이벤트를 다루는것은 일반적인 html dom에서 
다루는것과 크게 다르지 않지만 차이점과 추가적인 기능등을 알아보자.  
  
* React event는 camelCase를 사용하여 명명한다.(낙타처럼 중간에 대문자가 들어간다는 의미) 
ex) onclick -> onClick
* JSX를 이용하여 이벤트핸들러 함수를 직접 전달한다. `onClick={...}`
* prevent default를 처리하는 방식이 다르다.
* event handler가 받는 이벤트 객체가 다르다: `SyntheticEvent`
* `addEventListener`를 사용할 필요가 없다.
* 디자인 패턴
  
## e.preventDefault()
prevent default의 의미는 해당 이벤트의 기본적인 동작을 막는것이다. 
예를 들어 아래와 같은 코드는 `return false`를 통해 링크로 이동하는것을 막는다.
```
<a href="#" onclick="console.log('The link was clicked.'); return false">
  Click me
</a>
```
react에서는 위와같이 `return false`를 통한 방식이 작동하지않는다.  
아래와 같이 명시적으로 `event.preventDefault()`를 호출해야한다.
```
function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
}
```

## SyntheticEvent
react의 이벤트는 일반 자바스크립트 이벤트와 다르다. 
추가적인 기능이 추가되어있다고 보면됨. 
자세한건 [공식문서참고](https://reactjs.org/docs/events.html)  
  
## addEventListener 사용할 필요없음 + 디자인패턴
__addEventListener 사용할 필요가 없다.__
그냥 렌더링 될때 리스너 추가.  
  
__component를 클래스로 생성할때 이벤트 핸들러를 메소드로 지정하자__
```
class Form extends React.Component {

    constructor(props){
        super(props);
        ...
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        ...
        this.setState((prevState)=>{
            ...
            console.log(event);
        });
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="submit"/>
            </form>
        );
    }
}
```
위와 같이 렌더링할때 클래스의 메소드를 이벤트 핸들러로 지정하는 패턴을 흔히 사용한다.  
또한 자바스크립트 기본중의 하나로 
_메소드 내부에서 `this`를 참조하기 위해서, 생성자에서 메소드에 this를 바인드 시켜주는 패턴을 사용한다._

이것이 귀찮다면 아래와 같이 코드를 작성할 수도 있다.
```
class ... {
    ...
    method1 = ()=>{

    }
}
```
이렇게 작성하면 자동으로 바인드됨.