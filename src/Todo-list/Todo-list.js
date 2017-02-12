import React from 'react'
import './Todo-list.css'
import TodoItem from '../Todo-item/Todo-item'

class TodoList extends React.Component {

	constructor(){
		super()
		this.state = {
			numOfItems: 0
		}
	}

	addTodo(event) {
		this.setState({
			numOfItems: this.state.numOfItems + 1
		})
	}

	render() {
		let todoItems = []

		for(let i = 0; i < this.state.numOfItems; i++){
			todoItems.push(<TodoItem key={i} />)
		}

		return (
			<div className="todo-list-container clearfix">
				<div>
					<h3>Lägg till saker att göra</h3>
				</div>
				<ul className="todo-list">
					{todoItems}
				</ul>
				<form className="form-inline">
					<div className="form-group">
						<input className="form-control" type="text" placeholder="Vad ska du göra?" />
						<button className="add-todo-button btn btn-success" onClick={(event) => { this.addTodo(event)}}>Lägg till</button>
					</div>
				</form>
			</div>
		);
  }
}

export default TodoList;