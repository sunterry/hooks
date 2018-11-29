import React, { useState, useCallback, useReducer } from 'react';
import UseCustom from './../components/useCustom';

const todosReducer = (todos, action) => {
	switch (action.type) {
		case "ADD_TODO":
			return [{ text: action.text, complete: false }, ...todos];
		case "TOGGLE_COMPLETE":
			return todos.map((todo, k) => k === action.i ? {
				...todo,
				complete: !todo.complete
			} : todo)
		case "RESET":
			return [];
		default:
			return todos;
	}
};

const TodoList = () => {
	// const [todos, setTodos] = useState([]);
	const [todos, dispatch] = useReducer([]);

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