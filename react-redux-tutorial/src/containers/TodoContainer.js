import React from 'react';
import { useSelector } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../component/Todos';
import useActions from '../lib/useActions';

// { input, todos, changeInput, insert, toggle, remove }

const TodoContainer = () => {
	const { input, todos } = useSelector(({ todos }) => ({
		input: todos.input,
		todos: todos.todos
	}));

	const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
		[changeInput, insert, toggle, remove],
		[]
	);

	/* const dispatch = useDispatch();
	const onChangeInput = useCallback(input => dispatch(changeInput(input)), [
		dispatch
	]);
	const onInsert = useCallback(text => dispatch(insert(text)), [dispatch]);
	const onToggle = useCallback(id => dispatch(toggle(id)), [dispatch]);
	const onRemove = useCallback(id => dispatch(remove(id)), [dispatch]); */

	return (
		<Todos
			input={input}
			todos={todos}
			onChangeInput={onChangeInput}
			onInsert={onInsert}
			onToggle={onToggle}
			onRemove={onRemove}
		/>
	);
};

export default React.memo(TodoContainer);

/** 
	비구조화 할당을 통해 todos를 분리하여
	state.todos.input 대신 todos.input을 사용
*/
/* export default connect(
	({ todos }) => ({
		input: todos.input,
		todos: todos.todos
	}),
	{
		changeInput,
		insert,
		toggle,
		remove
	}
)(TodoContainer); */
