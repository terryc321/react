import React from 'react';
import ReactDOM from 'react-dom';

class Board extends React.Component {
    render(){
	return (
		<div>
		<Toggle no="1" />
		<Toggle no="2" />
		<Toggle no="3" />
		</div>
	);
    }
}

class Toggle extends React.Component {
    constructor(props) {
	super(props);
	this.state = {isToggleOn: true , count: 0};

	// This binding is necessary to make `this` work in the callback
	this.hello = this.hello.bind(this);
    }

    hello(e){
	
	//alert("you clicked me " + this.props.no);
	//this.state.isToggleOn = !this.state.isToggleOn;
	//this.state = {isToggleOn : !this.state.isToggleOn};
	this.setState(state => ({
	    isToggleOn: !state.isToggleOn ,
	    count: state.count + 1
	}));
	
    }
    render(){
	return (<button onClick={this.hello}>Square {this.props.no} {this.state.isToggleOn ? 'ON' : 'OFF'} {this.state.count}</button>);
    }
}

ReactDOM.render(<Board />, document.getElementById('root'));









