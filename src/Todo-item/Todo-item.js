import React from 'react'
import './Todo-item.css'

class TodoItem extends React.Component {

	constructor(props){
		super(props)
		console.log(props)
	}

	render() {
		return (
			<div className="todo-list-item">
				<h3 className="todo-title">{this.props.value}</h3>
				<i onClick={this.props.onClick} className="delete-button fa fa-times" aria-hidden="true"></i>
			</div>
		);
  }
}

export default TodoItem;