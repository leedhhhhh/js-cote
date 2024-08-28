
// 밑과 지수를 받아들이는 power라는 함수를 작성합니다. 이 함수는 밑의 거듭제곱을 지수로 반환해야 합니다. 이 함수는 Math.pow()의 기능을 모방해야 합니다. 음의 밑과 지수에 대해서는 신경쓰지 마세요.
function power(firstNum, secondNum) {
  if (secondNum === 0) return 1;
  if (secondNum - 1 === 0) return firstNum;
  return firstNum * power(firstNum, secondNum - 1);
}

console.log(power(2, 0));
console.log(power(2, 2));
console.log(power(2, 7));

//숫자를 받아 해당 숫자의 계승(팩토리얼)을 반환하는 팩토리얼 함수를 작성하시오.
function factorial(num) {
  if (num === 0) return 1;
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

//숫자 배열을 받아 모든 숫자의 곱을 반환하는 productOfArray라는 함수를 작성하시오.
function productOfArray(arr) {
  if (arr.length === 1) return arr[0];
  return arr[0] * productOfArray(arr.slice(1));
}

//숫자를 받으면 0부터 함수에 전달된 숫자까지의 모든 숫자를 더하는 recursiveRange라는 함수를 작성하시오.
function recursiveRange(n) {
  return (n * (n + 1)) / 2;
}

function recursiveRange(n) {
  if (n - 1 === 0) return n;
  return n + recursiveRange(n - 1);
}

/*
숫자를 받아 피보나치 수열의 n번째 숫자를 반환하는 fib라는 재귀 함수를 작성하시오. 피보나치 수열은 1, 1로 시작하는 1, 1, 2, 3, 5, 8, ...의 정수의 수열이며, 모든 수는 이전 두 수의 합과 같다는 것을 명심하세요.
*/
function fib(index) {
  // 재귀 써서 모르겠어서 일단..
  if (index < 0) return null;
  let i = 0;
  let j = 1;
  let testArr = [];
  while (j + 1 < index) {
    testArr[0] = 1;
    testArr[1] = 1;
    testArr[j + 1] = testArr[i] + testArr[j];
    j++;
    i++;
  }

  return testArr[index - 1];
}

