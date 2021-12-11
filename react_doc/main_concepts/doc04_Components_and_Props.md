# Components and Props
_`Component`는 UI를 독립적으로 만든다. 이를통해 UI를 단독으로 사용, 또 재사용할 수 있다._
component란 `prop`을 받아 `react element`를 리턴하는 함수와 같은 존재이다.  
이 component란 단위를 통해 맨 처음의 문장이 가능해지는 것이다.

## 1. Component의 구성방법: Function or Class
아래와 같이 클래스와 함수 두가지 방법 모두 사용가능
```
function Welcome(props){
  return <h1>Welcome, {props.name}</h1>;
}

class Hi extends React.Component {
  render(){
    return <h1>Hi, {this.props.name}</h1>
  }
}
```

## 2. Rendering Component
1에서 구성한 컴포넌트를 어떻게 사용할 것 인가?
JSX로 사용가능하다. 위에서 만든 `Welcome`, `Hi`를 아래와 같이 사용가능하며  
JSX태그로 속성을 지정하여 `props`에 전달할 수 있다.
```
const element = (
  <div>
    <Hi name="wonbin" />
    <Welcome name="wonbin"/>
  </div>
);
ReactDOM.render(
  element,
  document.getElementById('root')
);
```
__주의사항: 컴포넌트의 이름은 대문자로 시작해야한다.__
소문자로 시작하면 html태그로 인식하고, 대문자로 시작하면 컴포넌트로 인식함.
즉 컴포넌트 이름이 소문자로 시작하게되면 컴포넌트에 정의해놓은 기능은 아무것도 작동하지 않음  

## 3. Component는 pure function처럼 작동해야함.
pure function은 파라미터의 값을 변경하지 않는 함수를 의미한다.  
react의 component는 pure function처럼 인자의 값을 변경하지 말아야한다.  
변경할 경우 오류발생.  
ex)
```
function Welcome(props){
  props.name = "changing parameter value occurs error";
  return <h1>Welcome, {props.name}</h1>;
}
```