import React from 'react'
import './Todo-item.css'

class TodoItem extends React.Component {

	constructor(props){
		super(props)

		console.log(props)

		this.state = {
			todoItems: [
				{value: "milk"},
				{value: "sugar"},
				{value: "grain"}
			]
		}

		
	}
	render() {
		return (
			<li className="todo-list-item">
				<span>Hello!</span>
				<span className="delete-button">X</span>
			</li>
		);
  }
}

export default TodoItem;