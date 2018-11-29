import React from 'react';
import  MemoChild from './../components/Memo';
class MemoDemo extends React.Component {
	state = {
		time: new Date(),
	}
	componentDidMount() {
		setInterval(() => {
			this.setState({
				time: new Date(),
			});
		}, 1000)
	}
	// shouldComponentUpdate(nextProps, nextState, nextContext) {
	// 	return this.state.time === nextState.time ? false : true;
	// }

	render() {
		return (
			<div>
				<MemoChild seconds={ 1 } />
				{ this.state.time.toString() }
			</div>
		)
	}
}

export default MemoDemo;