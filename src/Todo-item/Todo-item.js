import React from 'react'
import './Todo-item.css'

class TodoItem extends React.Component {

	constructor(props){
		super(props)
		console.log(props)
	}

	render() {
		return (
			<li className="todo-list-item">
				<span>{this.props.value}</span>
				<span className="delete-button">X</span>
			</li>
		);
  }
}

export default TodoItem;