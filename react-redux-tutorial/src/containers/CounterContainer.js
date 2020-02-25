import React, { useCallback } from 'react';
//import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../component/Counter';
import { increase, decrease } from '../modules/counter';

//{ number, increase, decrease }
const CounterContainer = () => {
	const number = useSelector(state => state.counter.number);
	const dispatch = useDispatch();
	const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
	const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

	return (
		<Counter
			number={number}
			onIncrease={onIncrease}
			onDecrease={onDecrease}
		/>
	);
};

// mapStateToProps와 mapDispatchToProps는 나중에 connect에 등록할때 임시함수로 작성할 수 있다.

/* const mapStateToProps = state => ({
	number: state.counter.number
}); */

// 객체로 선언시 connect에서 bindActionCreators로 자동적으로 처리해 준다.
/* const mapDispatchToProps = {
	increase,
	decrease
}; */

export default React.memo(CounterContainer);
