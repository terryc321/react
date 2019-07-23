import React from 'react';
import ReactDOM from 'react-dom';

import styles from './todo.css';

class ToDoList extends React.Component {
    constructor(props){
	super(props);

	this.onChange = this.onChange.bind(this);
	this.onClickAdd = this.onClickAdd.bind(this);
	this.deleteItem = this.deleteItem.bind(this);
	this.doneItem = this.doneItem.bind(this);
	
	// some state of react app
	this.state = { item : "",
		       items : [{item: "Apples",
				 done: false},
				{item:"Bananas",
				 done:false},
				{item:"Coconuts",
				 done:false},
				{item: "Grapes",
				 done:false}] };
    }

    
    countTodos(){
	let i = 0;
	let completed = 0;
	let todo = 0;
	let other = 0;
	let arr = this.state.items;
	for (i = 0 ; i < (arr.length - 1) ; i ++){
	    let v = arr[i];
	    other ++;
	    if (v.done){
		completed ++;
	    }
	    else{
		todo ++;
	    }
	}
	console.log("todo items = " + todo + " ,  completed items = " + completed + " , other=" + other);
	
	return { todo: todo , completed: completed};
    }

    
    doneItem(index){
	let newItems = this.state.items;
	newItems[index].done = true;
	this.setState({ items: newItems });
	
    }
    

    deleteItem(index){
	let newItems = this.state.items;
	newItems.splice(index,1);
	this.setState({ items: newItems });
	
    }
    
    onClickAdd(event) {
	console.log("text added " + event.target.value);
	let newItems = this.state.items;
	newItems.push({item : this.state.item , done : false});
	this.setState({items : newItems});
    }
    
    
    onChange(event) {
	console.log("text changed " + event.target.value);
	this.setState({item : event.target.value});
    }
    
    render(){
	// have some way to add items to list
	// map over items in list	
	return (<div className="grid-container">
		<h1>To Do List</h1>
		<div className="todo-status">You have {this.countTodos().todo} tasks outstanding , but have completed {this.countTodos().completed }</div><br/>
		<input type="text" value={this.state.item} onChange={this.onChange} placeholder="Type something here ..."/><br/>
		<input type="submit" value="Add Item" onClick={this.onClickAdd}/>
		<li>
		{this.state.items.map((item,index) => ( <ToDoItem key={index} name={item.item} index={index}
							done={item.done}
							deleteItem={this.deleteItem}
							doneItem={this.doneItem} />))}
		</li>
		</div>		
	       );
    }
    
}//ToDoList


class ToDoItem extends React.Component {
    constructor(props) {
	super(props);

	// This binding is necessary to make `this` work in the callback
	this.hello = this.hello.bind(this);
	
	this.onClickDone = this.onClickDone.bind(this);
	this.onClickDelete = this.onClickDelete.bind(this);
	
    }

    onClickDone(){
	console.log("done item");
	this.props.doneItem(this.props.index);
    }
    
    onClickDelete(){
	console.log("deleted item");
	this.props.deleteItem(this.props.index);
    }
    
    hello(e){
	//alert("you clicked me " + this.props.no);
	this.props.onChange(this.props.no);
    }
    
    render(){
	// onClick={this.clicked}
	// style={{ text-decoration : "line-through" }}
	return (
		<div className="todo-item-component">
		<ul><div>{ this.props.done ?
			   <div className="todo-item-done">{this.props.name} at index {this.props.index}</div>
			   : <div className="todo-item">{this.props.name} at index {this.props.index}</div> 
			 }
		<button onClick={this.onClickDone}>Done</button>
		<button onClick={this.onClickDelete}>Delete</button>
		</div>
		</ul>
	    </div>
	);
	
    }
}


ReactDOM.render(<ToDoList />, document.getElementById('root'));














