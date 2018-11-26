import React, { useState, useEffect } from 'react';

/**
 * @description useEffect第一个参数不接受 async关键字 在16.7.0-alpha.2 版本中
 * @description {
 *   https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30551
 *   https://stackoverflow.com/questions/53332321/react-hook-warnings-for-async-function-in-useeffect-useeffect-function-must-ret
 * }
 * @param url
 * @param count
 * @returns {{data, loading}}
 */
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