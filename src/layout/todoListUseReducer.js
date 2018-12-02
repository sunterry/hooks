import React, {  useReducer } from 'react';
import UseCustom from './../components/useCustom';
import produce  from 'immer';
import { useImmerReducer } from 'use-immer';

const todosReducer = (todos, action) => {
	switch (action.type) {
		case "ADD_TODO":
			return todos.push({ text: action.text, complete: false })
		case "TOGGLE_COMPLETE":
			return todos[action.i].complete = !todos[action.i].complete;
		case "RESET":
			return [];
		default:
			return todos;
	}
};

const TodoList = () => {
	const [todos, dispatch] = useImmerReducer(todosReducer, []);

	// const toggleComplete = (i) => {
	// 	setTodos(todos.map((item, k) => {
	// 		return k === i ? {
	// 			...item,
	// 			complete: !item.complete,
	// 		} : item ;
	// 	}))
	// };

	// const onSubmit = useCallback(
	// 	text => setTodos([{ text, complete: false }, ...todos]),
	// 	[todos]
	// );

	return (
		<div>
			<UseCustom dispatch={ dispatch } />
			{
				todos.map(({ text, complete }, i) => (
					<div
						onClick={ () => dispatch({type: 'TOGGLE_COMPLETE', i})} key={i}
						style={{ textDecoration: complete? 'line-through' : '' }}
					>
						{ text }
					</div>
				))
			}
			<button onClick={ () => dispatch({type: 'RESET'})}>清空</button>
		</div>
	)
};
export default TodoList;