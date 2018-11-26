import React, { useState, useEffect } from 'react';

const getFetchUser = (url, count) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		(async function () {
			const response = await fetch(url);
			const data = await response.json();
			setData(data);
			setLoading(false);
		})()
	}, [count]);
	return {
		data,
		loading,
	}
};

export default () => {
	const [count, setCount] = useState(0);
	const { data, loading } = getFetchUser('https://randomuser.me/api/', count);
	// const [person, setPerson] = useState(null);
	// useEffect( () => {
	// 	(async function () {
	// 		const response = await fetch('https://randomuser.me/api/');
	// 		const res = await response.json();
	// 		const [item] = res.results;
	// 		console.log(item);
	// 		setPerson(item);
	// 	})()
	// }, []);
	// 如果不加空数组那么会无限执行，因为每次setPerson都会去改变person的值
	return (
		<div>
			<p>这里是通过useEffect异步请求数据</p>
			<p> { count } </p>
			<button onClick={() => setCount(count+1)}>click me</button>
			{ loading ? <div>loading...</div> : <div>{ data && data.results[0] && data.results[0].name.first }</div>}
		</div>
	);
};