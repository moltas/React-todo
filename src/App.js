import React from 'react';
import Header from './Header/Header';
import TodoList from './Todo-list/Todo-list';

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />

				<div>
					<h1>Lägg till saker att göra</h1>
				</div>
				<TodoList />
			</div>
		)
	}
}

export default App;
