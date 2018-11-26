import React, { useState } from 'react';
import UseCustom from './../components/useCustom';

const TodoList = () => {
	const [todos, setTodos] = useState([]);

	const toggleComplete = (i) => {
		setTodos(todos.map((item, k) => {
			return k === i ? {
				...item,
				complete: !item.complete,
			} : item ;
		}))
	};

	return (
		<div>
			<UseCustom onSubmit={ text => setTodos([{text, complete: false}, ...todos]) } />
			{
				todos.map(({ text, complete }, i) => (
					<div
						onClick={ () => toggleComplete(i)} key={i}
						style={{ textDecoration: complete? 'line-through' : '' }}
					>
						{ text }
					</div>
				))
			}
			<button onClick={ () => setTodos([])}>清空</button>
		</div>
	)
};
export default TodoList;