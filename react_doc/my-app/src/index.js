import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tick from './doc05_tick.js';

function Welcome(props){
  return <h1>Welcome, {props.name}</h1>;
}

class Hi extends React.Component {
  render(){
    return <h1>Hi, {this.props.name}</h1>
  }
}

const element = (
  <div>
    <Hi name="wonbin" />
    <Welcome name="wonbin"/>
    <Tick incr={1}/>
  </div>
);
ReactDOM.render(
  element,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
