import React from 'react'
import './Todo-list.css'
import TodoItem from '../Todo-item/Todo-item'
import InputPanel from '../Input-panel/Input-panel';

class TodoList extends React.Component {

	constructor(){
		super()
		this.state = {
			todos: [
				{id: 1, value: 'korv'}
			],
			inputValue: '',
			numberOfTodos: 1
		}
	}

	handleInputChange(event) {
		this.setState({inputValue: event.target.value})
	}

	addTodo(event) {
		event.preventDefault()

		if (this.state.inputValue.length > 0) {
			let newArray = this.state.todos.slice()
			newArray.push({id: this.state.numberOfTodos + 1, value: this.state.inputValue})
			this.setState({
				todos: newArray,
				inputValue: '',
				numberOfTodos: this.state.numberOfTodos + 1
			})
		}
	}

	deleteTodo(event) {
		this.state.todos.splice(event, 1)
		this.setState({todos: this.state.todos})
	}

	render() {
		return (
			<div>
				<div className="todo-list-container clearfix">
					{this.state.todos.map((todo, i) => (
						<TodoItem
							key={todo.id}
							value={todo.value}
							onClick={this.deleteTodo.bind(this, i)}
						/>
					))}
				</div>
				<InputPanel
					onChange={this.handleInputChange.bind(this)}
					onClick={this.addTodo.bind(this)}
					value={this.state.inputValue}
				/>
			</div>
		);
  }
}

export default TodoList;