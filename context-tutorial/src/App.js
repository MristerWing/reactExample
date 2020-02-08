import React from 'react';
import ColorBox from './components/ColorBox';
import { ColorProvider } from './contexts/color';
import SelectColors from './components/SelectColors';

const App = () => {
	return (
		/**
		 * Provider는 Context의 value값을 변경할 때 사용된다.
		 * Provider를 사용할 때는 반드시 값을 명시해 주어야 한다.
		 */
		<ColorProvider>
			<div>
				<SelectColors />
				<ColorBox />
			</div>
		</ColorProvider>
	);
};

export default App;
