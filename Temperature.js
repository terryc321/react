import React from 'react';
import ReactDOM from 'react-dom';

/*

Temperature converter

maintain temperature in degrees
change celisus , changes temperature
change fahrenheit , attempt conversion, then change temperature

two input fields

Issues : 

- If nonsense in celsius field , is this to be over-written , ignored 
- how keep celisus and fahrenheit field 


*/


class TemperatureCalculator extends React.Component {
    constructor(props){
	super(props); // always
	this.celsius = this.celsius.bind(this);
	this.fahrenheit = this.fahrenheit.bind(this);
	
	this.state = { temperature : 32 ,
		       typed : 0 ,
		     };
    }

    celsiusToFahrenheit(c){
	return Math.floor(((c * 1.8) + 32));
    }

    fahrenheitToCelsius(f){
	return Math.floor(((f - 32) / 1.8))
    }
    
    celsius(temp){
	let c = Number(temp);
	(typeof(c) === typeof(123)) ? this.setState({ temperature : c }) : this.setState({ temperature : 0 }); 
    }
    
    fahrenheit(temp){
	let f = temp;
	try{ f = Number(temp); }catch(e){ f = 0;}
	(typeof(f) === typeof(123)) ? this.setState({ temperature : this.fahrenheitToCelsius(f) }) : this.setState({ temperature : 0 }); 
    }
    
    render(){
	return (<div className="TemperatureCalculator">
		The temperature is {this.state.temperature} degrees celisus.
		<TemperatureInput
		title="celsius"
		tempChange={this.celsius}
		value={"" + this.state.temperature} />
		
		<TemperatureInput
		title="fahrenheit"
		tempChange={this.fahrenheit}
		value={"" + this.celsiusToFahrenheit(this.state.temperature) } />
		
		</div>
	       );
    }
}


class TemperatureInput extends React.Component {
    constructor(props) {
	super(props); // always
    }

    onChange(e){
	this.props.tempChange(e.target.value );
    }
    
    render(){
	return (
		<div>
		<br/>
		{this.props.title} : 
		<input type="text" onChange={this.onChange.bind(this)} value={this.props.value}  /> 
		</div>
	);	
    }
}


ReactDOM.render(<TemperatureCalculator />, document.getElementById('root'));






