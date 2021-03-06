import React, { useState, useCallback } from 'react';
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

	const onSubmit = useCallback(
		text => setTodos([{ text, complete: false }, ...todos]),
		[todos]
	);

	return (
		<div>
			<UseCustom onSubmit={ onSubmit } />
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