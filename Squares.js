import React from 'react';
import ReactDOM from 'react-dom';


class Board extends React.Component {
    render(){
	return (<div>
		<span><Square no="1"/><Square no="2"/><Square no="3"/></span>
		<span><Square no="4"/><Square no="5"/><Square no="6"/></span>
		<span><Square no="7"/><Square no="8"/><Square no="9"/></span>
		</div>		
	       );
    }
}


class Square extends React.Component {
    constructor(props) {
	super(props);
	this.state = {isToggleOn: true};

	
	// This binding is necessary to make `this` work in the callback
	this.hello = this.hello.bind(this);
    }

    hello(e){
	alert("you clicked me " + this.props.no);
    }
    render(){
	return (<button onClick={this.hello}>Square {this.props.no}</button>);
    }
}

ReactDOM.render(<Board />, document.getElementById('root'));





