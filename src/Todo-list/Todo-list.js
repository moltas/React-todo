import React from 'react'
import './Todo-list.css'
import TodoItem from '../Todo-item/Todo-item'

class TodoList extends React.Component {

	constructor(){
		super()
		this.state = {
			values: [],
			inputValue: ''
		}
	}

	handleInputChange(event) {
		this.setState({inputValue: event.target.value})
	}

	addTodo(event) {
		let newArray = this.state.values.slice()
		newArray.push(this.state.inputValue)
		this.setState({
			values: newArray,
			inputValue: ''
		})
	}

	render() {
		let todoItems = []

		for(let i = 0; i < this.state.values.length; i++){
			todoItems.push(<TodoItem key={i} value={this.state.values[i]} />)
		}

		return (
			<div className="todo-list-container clearfix">
				<div>
					<h3>Lägg till saker att göra</h3>
				</div>
				<ul className="todo-list">
					{todoItems}
				</ul>
				<div className="form-group">
					<input 
						className="form-control"
						type="text" placeholder="Vad ska du göra?"
						onChange={(event) => this.handleInputChange(event)}
						value={this.state.inputValue}
					/>
					<button className="add-todo-button btn btn-success" onClick={(event) => this.addTodo(event)}>Lägg till</button>
				</div>
			</div>
		);
  }
}

export default TodoList;