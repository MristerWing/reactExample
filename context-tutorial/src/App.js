import React from 'react';
import ColorBox from './components/ColorBox';
import ColorContext from './contexts/color';

const App = () => {
	return (
		/**
		 * Provider는 Context의 value값을 변경할 때 사용된다.
		 * Provider를 사용할 때는 반드시 값을 명시해 주어야 한다.
		 */
		<ColorContext.Provider value={{ color: 'red' }}>
			<div>
				<ColorBox></ColorBox>
			</div>
		</ColorContext.Provider>
	);
};

export default App;
