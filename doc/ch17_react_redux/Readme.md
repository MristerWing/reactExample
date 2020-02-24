# react redux

1. 리액트 프로젝트에서 리덕스를 사용할 때 가장 많이 사용하는 패턴은 프레젠테이셔널 컴포넌트와 컨테이너 컴포넌트를 분리하는 것이다.
2. 프레젠테이셔널 컴포넌트는 주로 상태관리가 이루어 지지 않고, 그저 props를 받아와서 화면에 ui만 보여주는 컴포넌트로, java의 mvc와 비교하면 view와 비슷하다.
3. 컨테이너 컴포넌트는 리덕스로부터 상태를 받거나, 리덕스 스토어에 액션을 디스패치 하기도 하는 컴포넌트로 컨트롤러와 비슷하다.

### 리덕스 관리 패턴

1. 리액트에 리덕스를 적용할 때에는 액션타입, 액션 생성함수, 리듀서코드를 작성하는데 이를 각각 다른 파일에 작성 할 수도 있고, 기능별로 묶어서 하나의 파일로 작성할 수도 있다.
2. 기능별, 모듈구조로 묶어서 관리하는 것을 Ducks 패턴이라고 한다.
3. Ducks 패턴 사용시 액션타입 정의 -> 액션 생성 함수 -> 초기 상태 및 리듀서 함수 생성 순으로 작성한다.

### 리액트 리듀서

1. 프로젝트에서 여러개의 리듀서를 생성 할 경우, 나중에 스토어를 만들 때에는 하나의 리듀서 만을 사용해야 하기 때문에 하나로 합쳐야 한다.
2. 이때 리덕스에서 제공하는 combineReducers라는 유틸 함수를 사용하면 쉽게 합칠 수 있다.

### react에 redux 적용하기

1. 먼저 src의 index.js에 store를 생성해야 한다.
2. 이후 App을 Provider 컴포넌트로 감싸 주어야 한다.

### redux dev tools

1. 리덕스로 개발 할 때 브라우저에서 리덕스의 상태를 확인하기 위해서 확장프로그램인 Redux DevTools를 사용한다.
2. 다음과 같은 예시로 프로젝트에 적용할 수 있다.

```javascript
const store = createStore(
	rootReducer /* preloadedState, */,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
```

3. 혹은 패키지를 설치하여 적용할 수 있다. 설치 명령어는 다음과 같다.

```
yarn add redux-devtools-extension
```

4. 패키지로 설치시는 프로젝트에 다음과 같이 적용 시킨다.

```javascript
const store = createStore(rootReducer, composeWithDevTools());
```

### redux connect

1. 컴포넌트를 리덕스와 연동하는 함수로 다음과 같이 사용한다.

```javascript
connect(mapStateToProps, mapDispatchToProps)(연동 할 컴포넌트)
```

2. `connect`안의 변수들은 다음과 같은 의미이다.

    1. `mapStateToProps`: 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수이다.
    2. `mapDispatchToProps`: 액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수이다.

3. `connect`함수를 호출하고 나면 다른 함수를 반환 한다. 반환된 함수에 컴포넌트를 피라미터로 넣어주면 리덕스와 연동된 컴포넌트가 만들어진다.

4. 정리하면 다음과 같다.

```javascript
const makeContainer = connect(mapStateToProps, mapDispatchToProps);
makeContainer(targetComponent);
```

### bindActionCreators

1. 액션 생성 함수가 많아져서 dispatch함수의 호출발생이 많아 질 경우 이를 해결하기 위해 사용하는 유틸함수이다.
2. redux에서 제공하는 함수로 다음과 같이 사용한다.

```javascript
imprort { bindActionCreators } from 'redux';

(...)

export default connect(
    state => ({
        (...)
    }),
    dispatch =>
        bindActionCreators(
            {
                function1,
                function2
            },
            dispatch
        )
)(targetContainer);

// 혹은 이렇게도 사용 가능하다
export default connect(
    state => ({
        (...)
    }),
    {
        function1,
        function2
    }
)(targetContainer);

```

### redux-actions 라이브러리

1. redux-actions 라이브러리는 액션생성 함수를 더 짧은 코드로 작성할 수 있게 도와주는 라이브러리이다.
2. 가장 큰 특징은 리듀서를 작성할 때 switch/case문이 아니라 hadleActions라는 함수를 사용하여 각 액션마다 업데이트 함수를 설정하는 형식으로 작성이 가능한 점이다.

```npm
yarn add redux-actions
```

3. redux-actions에는 액션생성함수를 간략하게 해주는 `createAction`함수와 reducer생성함수인 `hadleActions`함수로 구성되어 있다.

    1. `createAction`: `createAction(액션 타입)`으로 작성한다. 이후 액션에 필요로 하는 추가 데이터가 있을 경우 피라미터로 전달하며 이를 payload라고 칭한다.

    ```javascript
    const ACTION = 'example/ACTION';
    const action = createAction(ACTION);
    const loadAction = action('Hello World');

    /*
        { type: ACTION, payload: 'Hello World' }
    */

    // payload를 액션생성함수에서 받아온것을 넣는게 아니라 변형을 시도할 경우
    const action = createAction(ACTION, text => `${text}!`);

    /*
        { type: ACTION, payload: 'Hello World!' }
        뒤에 !가 붙게 변형된다
    */
    ```

    2. `hadleActions`: 기존의 reducer함수와 달리 switch/case를 사용하지 않는다. 사용시 함수의 첫 번째 인자에는 각 액션에 대한 업데이트(동작)을, 두 번째 인자에는 초기상태 값을 넣어준다.

    ```javascript
    hadleActions(
        {
            [update1]: (state, action) => ({ work... }),
            [update2]: (state, action) => ({ work... })
        },
        initialState
    )
    ```
