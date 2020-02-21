import React from 'react';
import CounterContainer from './containers/CounterContainer';
import Todos from './component/Todos';

const App = () => {
	return (
		<div>
			<CounterContainer />
			<hr />
			<Todos />
		</div>
	);
};

export default App;
