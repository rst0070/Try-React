import React from 'react';

/**
 * 사용자의 입력에 맞게 백그라운드 컬러 변경하는 예시
 */
export default class ChangeColor extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            color : props.color
        }
        this.handleChange = this.handleChange.bind(this);
    }


    /*
    handleChange = (event, id)=>{
        this.setState((prev)=>{
            return {color : document.getElementById(id).value};
        })
    }
    위와 같이 작성하면 생성자에서 this를 바인드해줄 필요가 없다.
    */
    handleChange(event, id){
        this.setState((prev)=>{
            return {color : document.getElementById(id).value};
        })
    }

    render(){
        let id = "colorInput";
        return (
            <div>
                <input id={id} type="text" placeholder="color you want"/>
                <button onClick={(e)=>this.handleChange(e, id)}>do change background color</button>
                <div id="changingDiv" style={{background : this.state.color}}>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                </div>
            </div>
        );
    }
}