import React from 'react'
import './Todo-item.css'

const TodoItem = (props) => {
	return (
		<div className="todo-list-item">
			<h3 className="todo-title">{props.value}</h3>
			<i onClick={props.onClick} className="delete-button fa fa-times" aria-hidden="true"></i>
		</div>
	)
}

TodoItem.propTypes = {
	value: React.PropTypes.string.isRequired
}

export default TodoItem;