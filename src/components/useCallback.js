import React, { useState, useCallback } from 'react';

/**
 * @description useCallback 不管第二参数是怎样的都会先执行一次
 * @description 如果是第二个参数为count 那么只有conut发生变化了才会执行
 * @description 如果第二个参数是空数组，那么执行一次后就永远不会执行了
 * @returns {*}
 */
export default () => {
	const [count, setCount] = useState(0);
	const [count1, setCount1] = useState(0);
	return (
		<div>
			<p>{count}</p>
			<button onClick={useCallback(() => setCount(count + 1), [count])}>click me</button>
			<p>{count1}</p>
			<button onClick={useCallback(() => setCount1(count1 + 1), [count1])}>click me</button>
		</div>
	)
}