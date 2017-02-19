import React from 'react';
import Header from './Header/Header';
import Title from './Title/Title';
import TodoList from './Todo-list/Todo-list';

class App extends React.Component {
	render() {
		return (
			<div>
				<Title />
				<TodoList />
			</div>
		)
	}
}

export default App;
