import React, { memo } from 'react';

/**
 * @description 当父级组建数据改变的情况下， 子组件也会渲染
 * @description 如果子组件是一个纯函数，其实是不需要渲染的，这样会损失一部分性能
 * @description 如果子组件是一个函数组件， 子组件的数据没有发生改变可
 * @description 避免渲染可以使用 memo(Component)
 * @description 如果是一个class 可以使用PureComponent 或者 shouldComponentUpdate
 */
const Child = ({ seconds }) => {
	console.log(`i am updating event ${seconds}`);
	return <p>i am updating event { seconds }</p>
};

export default memo(Child);