# Conditional Rendering
어떤 방식으로 조건에 따른 렌더링을 할까?  
__1. if, else문 사용__  
if , else문을 이용해서 선택적으로 렌더링될걸 리턴  
  
__2. JSX expression 사용__  
```
//지금의 초가 짝수인가 홀수인가에 따라 무엇을 JSX 결과값으로 넣을지 결정가능
{ props.isEvenSecond ? <p>this is even second</p> : <p>this is not even second</p> }
```
  
__3. null값 사용__  
element대신 null값을 리턴하면 렌더링되지 않는다.
```
if(doNotRender) return null;
...
```

