import React, { useState, useEffect } from 'react';

const UseEffectHooks = () => {
	const [count, setCount]  = useState(0);
	const [obj, setObj]  = useState({ name: 'terry' });

	/**
	 * useEffect 函数在类似于有状态的组件中的
	 * componentWillUnmount componentDidMount componentDidUpdate三个生命周期函数
	 * 当Dom渲染完成或数据更新都会执行useEffect函数
	 * 1.如果存在多个useEffect，并且其中一个要走生命周期函数， 那么可以传递第二个参数(数组类型),第二个参数是哪个数据发生变化了，设置哪个useEffect走(生命周期中的ComponentDidUpdate)
	 * 2.如果第二个参数传递一个空数组，那么useEffect(中的生命周期componentDidUpdate)将不会执行， 也不会渲染页面了(componentDidMount依然都会执行)
	 */
	useEffect(() => {
		console.log(count);
		document.title = `您点击了${count}次`;
	}, [count]);
	useEffect(() => {
		console.log(obj.name);
	}, [obj.name]);
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