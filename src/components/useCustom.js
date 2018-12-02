import React, { useState, useCallback } from 'react';

const useInputValue = (initValue) => {
	const [value, setValue] = useState(initValue);
	return {
		value,
		onChange: useCallback(e => setValue(e.target.value), []),
		resetValue: () => setValue(''),
	}
}

export default React.memo(({ dispatch }) => {
	console.log('render');
	const { resetValue, ...text } = useInputValue('');
	return (
		<form onSubmit={ e => {
			e.preventDefault();
			dispatch({type: 'ADD_TODO', text: text.value});
			resetValue();
		}}>
			<input type="text" { ...text } />
		</form>
	)
})