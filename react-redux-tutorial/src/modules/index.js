// 파일 이름을 index.js로 해두면 나중에 파일을 불러 올 때 디렉토리 이름까지만 입력하면 자동으로 index.js를 불러온다.

import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
	counter,
	todos
});

export default rootReducer;
