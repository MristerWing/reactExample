# ContextAPI를 이용한 컴포넌트 전역관리

1. react에서 컴포넌트의 상태를 관리하기 위해서는 주로 최상위 컴포넌트인 App의 state에 넣어서 관리한다.
2. 이러한 경우 여러 컴포넌트의 흐름을 거쳐서 App의 value값을 전달해야 한다. 이는 여러 컴포넌트를 거쳐서 이동하기 때문에 유지보수성이 낮아 질 수 있다.
3. 이를 해결하기 위해 리덕스나 MobX같은 라이브러리를 사용했으나, react 16.3에서는 ContextAPI를 제공하여 손쉬운 관리를 제공해준다.
4. 이는 여러 컴포넌트를 거치는 것이 아닌, Context를 생성하여 단 한번에 원하는 값을 받아와서 사용하는 것이다.

### Render Props

-   Render Props(Function as a child)는 컴포넌트 사이에 그 컴포넌트의 자식 자리에 JSX나 문자열이 아닌 함수를 전달하는 방식을 말한다.

```javascript
import React from 'react';

const RenderPropsSample = ({children}) => {
    return <div>결과: {children(5)}</div>;
}

exprot default RenderPropsSample;

```

-   위 함수를 다음과 같이 작성할 수 있다.

```javascript
<RederPropsSample>{value => 2 * value}</RenderPropsSample>
```

-   RenderPropsSample에 children props로 피라미터에 2를 곱해서 반환하는 함수를 전달하면, 해당 컴포넌트는 이 함수에 5를 인자로 넣어서 결과:10을 렌더링한다.
