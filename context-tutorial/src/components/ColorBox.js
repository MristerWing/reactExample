import React from 'react';
import { ColorConsumer } from '../contexts/color';

const ColorBox = () => {
	return (
		<ColorConsumer>
			{/**
			 * Consumer 사이에 중괄호를 열어서 그 안에 함수를 넣어주었다.
			 * 이러한 패턴을 Function as as child 혹은 Render Props라고 한다.
			 * 컴포넌트의 child자리에 일반 JSX 혹은 문자열이 아닌 함수를 전달하는 방식을 의미한다.
			 */
			value => (
				<>
					<div
						style={{
							width: '64px',
							height: '64px',
							background: value.state.color
						}}
					/>
					<div
						style={{
							width: '32px',
							height: '32px',
							background: value.state.subcolor
						}}
					/>
				</>
			)}
		</ColorConsumer>
	);
};

export default ColorBox;
