import React from 'react'
import './Input-panel.css'

const InputPanel = (props) => {
	return (
		<form className="input-panel">
			<input 
				className="input-field form-control"
				type="text"
				placeholder="Vad ska du göra?"
				value={props.value}
				onChange={props.onChange}
			/>
			<button 
				onClick={props.onClick}
				type="submit"
				className="submit-button add-todo-button btn btn-success">
				Lägg till
			</button>
		</form>
	)
}

export default InputPanel;