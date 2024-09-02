// nestedEvenSum이라는 재귀 함수를 작성하시오. 중첩된(nested) 객체를 포함할 수 있는 객체에서 모든 짝수의 합계를 반환하는 함수입니다.
function nestedEvenSum(obj) {
  let sum = 0;
  for (let value in obj) {
    // 숫자이면서 짝수다
    if (typeof obj[value] === "number" && obj[value] % 2 === 0) {
      sum += obj[value];
    }

    if (isPlainObject(obj[value])) {
      sum += nestedEvenSum(obj[value]);
    }
  }

  return sum;
}

function isPlainObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
