import React, { Component } from 'react';

class Counter extends Component {
	state = {
		number: 0,
		fixedNumber: 0
	};
	render() {
		const { number, fixedNumber } = this.state; // state를 조회할 때느 this.state로 조회한다.
		return (
			<div>
				<h1>{number}</h1>
				<h2>바뀌지 않는 값 : {fixedNumber}</h2>
				<button
					// onclick을 통해 버튼이 클릭 되었을 때 호출할 함수를 지정한다.
					onClick={() => {
						this.setState(
							{
								number: number + 1
							},
							() => {
								console.log('방금 함수가 호출됨.');
								console.log(this.state);
							}
						);
					}}
				>
					+1
				</button>
			</div>
		);
	}
}

export default Counter;
