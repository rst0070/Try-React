# Rendering Elements + Update
react element는 javascript object이다.
ReactDOM은 html DOM에 React Element를 업데이트해주는 동작을 한다.  

## 1. render into dom
* html파일에 특정 `div`가 있는데 이것을 `root dom node`라고 부르며 
이 태그가 루트인 서브 돔 트리는 ReactDOM이 관리하도록 한다.
* `root dom node`를 지정하는 방식: `ReactDOM.render()`으로 지정.
```
---html 파일---
<div id="root"></div>

---javascript 파일---
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

## 2. Updating the Rendered Element
__변경불가__
react element는 한번 생성되면 변경이 불가하다. 
따라서 update를 하기 위해선 다시 새로운 element를 render하는 것 밖에 없음.  
즉 `ReactDOM.render()`를 다시 호출하는 방법밖에 없다.
__대부분의 react app에서는 `ReactDOM.render()`을 한번만 호출한다__
이 이유는 `ReactDOM.render()`이 `stateful component`로 감춰지기때문.  

__그러면 비효율적인거 아닌가?__
ReactDOM은 render를 호출할때 이전에 render한것과 비교하여 필요한것만 수정한다.