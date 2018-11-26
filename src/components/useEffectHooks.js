import React, { useState, useEffect } from 'react';

const UseEffectHooks = () => {
	const [count, setCount]  = useState(0);
	const [obj, setObj]  = useState({ name: 'terry' });

	/**
	 * useEffect 函数在类似于有状态的组件中的
	 * componentWillUnmount componentDidMount componentDidUpdate三个生命周期函数
	 * 当Dom渲染完成或数据更新或组件将要卸载时都会执行useEffect函数
	 */
	useEffect(() => {
		document.title = `您点击了${count}次`;
	});
	// componentWillUnmount() {}
	// componentDidMount() {}
	// componentDidUpdate() {}

	return (
		<div>
			<p>{ count }</p>
			<p> {obj.name} </p>
			<button onClick={ () => setCount(count + 1) } > click me</button>
			<button onClick={ () => setObj({ name: 'duantong' }) } >edit</button>
		</div>
	);
};

export default UseEffectHooks;