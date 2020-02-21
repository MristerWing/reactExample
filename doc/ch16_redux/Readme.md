# Redux

### Redux란?

1. Redux란 javascript의 전역상태 관리 라이브러리를 의미한다.
2. Redux는 React뿐만 아니라 바닐라 js나 js의 다른 프레임워크에도 활용이 가능하다.
3. Redux는 세가지 규칙이 적용된다. 단일스토어 이여야 하며, 읽기 전용상태이여야 하고, Reducer는 순수 함수여야만 한다.

### Redux의 구성

#### Action

1. 상태에 어떠한 변화가 필요하면 액션(action)이란 것이 발생한다. 이는 하나의 객체로 표현된다.

```javascript
{
	type: 'TODLE_VALUE';
}
```

2. 액션 객체는 반드시 type 필드를 가지고 있어야 한다.
3. 액션의 type은 액션의 이름을 의미한다.
4. 그외의 나머지 값들은 상태를 변경할 때 참고해야 하는 값이며, 작성자 가 임의로 작성할 수 있다.

```javascript
{
    type: 'ADD_TODO,
    data: {
        id: 1,
        text: '리덕스 배우기'
    }
}

{
    type: 'CHANGE_INPUT',
    text: '안녕하세요'
}
```

#### Action 생성 함수

1. 액션 생성함수(action creator)는 액션 객체를 만들어 주는 함수이다.
2. 매번 액션객체를 만드는 것은 비효율적이기 때문에 함수로 만들어서 관리한다.

```javascript
function addTodo(data) {
	return {
		type: 'ADD_TODO',
		data
	};
}

//화살표 함수도 사용 가능하다.
const chagngeInput = text => ({
	type: 'CHANGE_INPUT',
	text
});
```

#### reducer

1. 리듀서는 변화를 일으키는 함수이다.
2. 액션을 만들어서 발생시키면 리듀서가 현재 상태와 전달을 받은 액션객체를 피라미터로 받아온다. 그리고 두 값을 참고하여 새로운 상태를 반환해준다.

```javascript
const initialState = {
	counter: 1
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case INCREMENT:
			return {
				counter: state.counter + 1
			};
		default:
			return state;
	}
}
```

#### store

1. 프로젝트에 리덕스를 적용하기 위해 스토어(store)를 만든다.
2. 한개의 프로젝트는 하나의 스토어만을 가질 수 있다.
3. 스토어 안에는 현재 애플리케이션의 상태와 리듀서가 들어가 있으며, 그 외에도 몇가지 중요한 내장 함수를 가진다.

#### dispatch

1. 디스패치(dispatch)는 스토어의 내장 함수중 하나이다.
2. 디스패치는 '액션을 발생시키는 것'이다.
3. `dispatch(action)`과 같은 형태로 액션객체를 피라미터로 넣어서 호출한다.
4. 호출시 스토어는 리듀서 함수를 실행시켜 새로운 상태를 만들어 준다.

#### subscribe

1. 구독(subscribe)또한 스토어의 내장 함수중 하나이다.
2. 구독함수 안에 리스너 함수를 피라미터로 넣어서 호출하면, 이 리스너 함수가 액션이 디스패치가 되어 상태가 변경될 때마다 호출된다.

```javascript
const listener = () => {
	console.log('상태가 변경됨.');
};

const unsubscrbe = store.subscribe(listener);
unsubscrbe(); // 추후 구독을 비 활성화 할 때 함수를 호출
```

---

### 참고 링크

Redux로의 카툰안내서 [Click](http://bestalign.github.io/2015/10/26/cartoon-intro-to-redux/)
