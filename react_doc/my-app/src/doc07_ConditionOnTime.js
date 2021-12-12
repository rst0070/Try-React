import React from 'react';

/**
 * 시간에 따른 conditional rendering을 해보자(짝수초, 홀수초)
 * Hello: if-else
 * AboutSecond: JSX expression
 * VisibleWhenEvenSecond: null값 사용
 */
export default class ConditionOnTime extends React.Component {
    constructor(props){
        super(props);
        let isEven = (new Date()).getSeconds() % 2 == 0;
        this.state = {isEvenSecond : isEven};

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        this.secondAction = setInterval(
            ()=>{
                this.setState((prev)=>{
                    return { isEvenSecond : !prev.isEvenSecond};
                })
            },
            1000
        )
    }

    componentWillUnmount(){
        clearInterval(this.secondAction);
    }

    render(){
        return (
            <div>
                <Hello isEven={this.state.isEvenSecond} />
                <AboutSecond isEven={this.state.isEvenSecond}/>
                <VisibleWhenEvenSecond isEven={this.state.isEvenSecond}/>
            </div>
        );
    }
}

function Hello(props){
    if(props.isEven)
        return <p>Hi there!</p>;
    return <p>Hello!</p>;
}

function AboutSecond(props){
    return (
        <div>
            {
                props.isEven ? 
                <p>this is even second</p> :
                <p>this is not even second</p>
            }
        </div>
    );
}

function VisibleWhenEvenSecond(props){
    if(props.isEven)
        return <p>this is visible when second is even number</p>;
    return null;
}