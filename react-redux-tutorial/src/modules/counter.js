import { createAction, handleActions } from 'redux-actions';

// 모듈작성시 예, 액션 타입 정의
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 초기상태 설정
const initialState = {
	number: 0
};

// reducer 함수 생성
/**
 * hadleActions 함수의 첫번째 피라미터에는 각 액션에 대한 업데이트 함수를 넣어준다.
 * 두번째 피라미터에는 초기 상태를 넣어준다.
 */
const counter = handleActions(
	{
		[INCREASE]: (state, action) => ({ number: state.number + 1 }),
		[DECREASE]: (state, action) => ({ number: state.number - 1 })
	},
	initialState
);

export default counter;
