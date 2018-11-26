import React, { useState } from 'react';

/**
 * import { useState } from 'react';
 * useState解构时时一个数组， 数组的第一项是初始值，第二项为处理函数
 * useState 允许出现多个
 * useState 可以是任意数据类型
 */
const UseStateHooks = () => {
	const [count, setCount]  = useState(0);
	const [obj, setObj]  = useState({ name: 'terry' });
	return (
		<div>
			<p>{ count }</p>
			<p> {obj.name} </p>
			<button onClick={ () => setCount(count + 1) } > click me</button>
			<button onClick={ () => setObj({ name: 'duantong' }) } >edit</button>
		</div>
	);
};

export default UseStateHooks;