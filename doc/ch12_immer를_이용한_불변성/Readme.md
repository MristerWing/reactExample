# immer를 이용한 객체 불변성 유지

1. 객체의 불변성을 유지하는 가장 쉬운 방법은 전개 연산자와 배열의 내장 함수를 사용해서 배열이나 객체를 복사하여 새로운 값을 덮을 수 있다.
2. 하지만 이러한 방법은 값 하나를 업데이트 하기 위해서는 상댕히 많은 코드를 작성해야 한다.
3. 이를 해결하기 위해서 immer라이브러리를 이용하면 간단하게 해결 할 수 있다.

-   immer의 사용법은 다음과 같다.

```javascript
import produce from 'immer';
const nextState = produce(originalState, draft => {
	// 바꾸고 싶은 값 바꾸기
	draft.somewhere.deep.inside = 5;
});
```
