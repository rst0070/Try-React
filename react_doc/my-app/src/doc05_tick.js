import React from 'react';

export default class Tick extends React.Component{
    constructor(props){
        super(props);//여기에 this.props = props 코드가 있군
        this.state = {
            time : 1
        };
    }

    componentDidMount(){
        this.myid = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.myid);
    }

    tick(){
        this.setState((state, props)=>{
            return {time : state.time + props.incr};
        });
    }

    render(){
        return (
            <div>
                <p>It's {this.state.time}</p>
            </div>
        );
    }
}