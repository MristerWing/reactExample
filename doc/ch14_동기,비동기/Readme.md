# 동기, 비동기

-   react컴포넌트에서 API를 연동하여 개발할 때 절때 잊지 말아야 할 유의 사항은 useEffect에 들옥하는 함수는 async로 작성해서는 안된다는 것이다. useEffect안에 async함수를 따로 만들어 주어야 한다.

### Promise

-   js es6에서 콜백지옥을 해결하기 위해 도입된 기능이다.  
    ex)

```javascript
function increase(number) {
	const promise = new Promise((resolve, reject) => {
		// resolve = 성공, reject = 실패
		setTimeout(() => {
			const result = number + 10;
			if (result > 50) {
				const e = new Error('NumberTooBig');
				return reject(e);
			}
			resolve(result); // number 값에 +10 후 성공처리
		}, 1000);
	});
	return promise;
}

increase(0)
	.then(number => {
		// Promise에서 resolve된 값은 .then을 통해서 받아올 수 있음
		console.log(number);
		return increase(number); // Promise를 리턴하면
	})
	.then(number => {
		// 또다시 then으로 처리 가능
		console.log(number);
		return increase(number);
	})
	.catch(e => {
		// 중간에 에러 발생시 .catch를 통해 알 수 있음
		console.log(e);
	});
```

#### async/await

1. async/await는 Promise를 더욱 쉽게 사용할 수 있도록 해 주는 ES8문법이다.
2. 문법을 사용하려면 함수 앞부분에 async키워드를 추가하고 해당 함수 내에서 Promise앞부분에 await키워드를 사용한다.

ex)

```javascript
// 위와 동일한 increase함수 사용
async function runTasks() {
	// try/catch문을 통해서 에러를 처리
	try {
		let result = await increment(0);
		console.log(result);
		result = await increment(result);
		console.log(result);
		result = await increment(result);
		console.log(result);
		result = await increment(result);
		console.log(result);
	} catch (e) {
		console.log(e);
	}
}
```
