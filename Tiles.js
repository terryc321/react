import React from 'react';
import ReactDOM from 'react-dom';

import styles from './tiles.css';


class Board extends React.Component {
    player1 = 1;
    player2 = 2;
    
    constructor(props){
	super(props);

	this.onSquareChange = this.onSquareChange.bind(this);
	this.isWinner = this.isWinner.bind(this);
	
	
	this.state = { game : "playing" ,
		       player : 1,
		       squares : [null,null,null,
				  null,null,null,
				  null,null,null]};
    }

    isWinner(squares , p){
	const sq = squares;
	// 0 1 2
	// 3 4 5
	// 6 7 8    0 , 4 , 8
	//          2 , 4 , 6
	if ((sq[0] === p && sq[4] === p && sq[8] === p) ||
	    (sq[2] === p && sq[4] === p && sq[6] === p) ||	
	    (sq[0] === p && sq[1] === p && sq[2] === p) ||
	    (sq[3] === p && sq[4] === p && sq[5] === p) ||
	    (sq[6] === p && sq[7] === p && sq[8] === p) ||	
	    (sq[0] === p && sq[3] === p && sq[6] === p) ||
	    (sq[1] === p && sq[4] === p && sq[7] === p) ||
	    (sq[2] === p && sq[5] === p && sq[8] === p)){ 
	    return true; }
	return false;
    }

    onSquareChange(no){
	console.log("onSquareChange " + no);
	if (this.state.game === "playing"){
	    // ok
	}
	else {
	    // not playing game
	    return;
	}
	
	// copy old squares ? why not splice ?
	let newSquares = [ this.state.squares[0] ,this.state.squares[1] ,this.state.squares[2] ,
			   this.state.squares[3] ,this.state.squares[4] ,this.state.squares[5] ,
			   this.state.squares[6] ,this.state.squares[7] ,this.state.squares[8] ];
	let v = this.state.squares[no];
	if (v){
	    // square already occupied
	    return ;
	}
	else {
	    
	    let nextPlayer = this.state.player + 1;
	    if (nextPlayer > 2){
		nextPlayer = 1;
	    }

	    console.log(" v = " + v );
	    console.log(" nextPlayer = " + nextPlayer );
	    console.log(" Player = " + this.state.player );
	    console.log("typeof v = " + typeof(v));

	    
	    //console.log("v && v=0 then " + this.state.player);
	    newSquares[no] = this.state.player;

	    let sq = newSquares;
	    let nextGame = this.state.game;

	    console.log(" Setting NEW STATE ");
	    this.setState({ game :  nextGame , 
			    player :  nextPlayer ,
			    squares : newSquares });
	    //console.log(this.state.squares);
	    console.log(newSquares);

	    
	    //
	// ------------------------------------------------------------------------------------------------
	    if (this.isWinner(newSquares , this.player1)){
	    this.setState( { nextGame :"won1" , playing : false});
	    alert("player 1 won !");
	}
	    else if (this.isWinner(newSquares , this.player2)){
	    this.setState( { nextGame :"won2" , playing : false});
	    alert("player 2 won !");
	}


	    
	    //}
	}
	
    }
    
    render(){
	return (<div class="grid-container">
		<Square onChange={this.onSquareChange} no="0"  mark={this.state.squares[0]} />
		<Square  onChange={this.onSquareChange} no="1"  mark={this.state.squares[1]} />
		<Square  onChange={this.onSquareChange} no="2"  mark={this.state.squares[2]} />
		<Square   onChange={this.onSquareChange} no="3" mark={this.state.squares[3]} />
		<Square   onChange={this.onSquareChange} no="4" mark={this.state.squares[4]} />
		<Square  onChange={this.onSquareChange} no="5" mark={this.state.squares[5]} />
		<Square  onChange={this.onSquareChange} no="6" mark={this.state.squares[6]} />
		<Square  onChange={this.onSquareChange} no="7" mark={this.state.squares[7]} />
		<Square   onChange={this.onSquareChange} no="8" mark={this.state.squares[8]} />
		</div>		
	       );
    }
}


class Square extends React.Component {
    constructor(props) {
	super(props);
	
	// This binding is necessary to make `this` work in the callback
	this.hello = this.hello.bind(this);
    }

    hello(e){
	//alert("you clicked me " + this.props.no);
	this.props.onChange(this.props.no);
    }
    
    render(){
	//return (<button onClick={this.hello}>Square {this.props.no} {this.props.mark} </button>);
	//return (<div><a href="#" onClick={this.hello} /></div>);
	return (<div class="grid-item" onClick={this.hello}>{this.props.mark}</div>);
    }
}


ReactDOM.render(<Board />, document.getElementById('root'));






