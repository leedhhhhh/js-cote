// 내 풀이 나는 obj를 직접바꿔줬는데 이러면 테스트코드에서 에러가난다.
function stringifyNumbers(obj) {
  for (let value in obj) {
    // 만약 숫자면 string으로 변환한다
    if (typeof obj[value] === "number") {
      obj[value] = obj[value].toString();
    }
    if (isPlainObject(obj[value])) {
      obj[value] = stringifyNumbers(obj[value]);
    }
    if (typeof obj[value] !== "number" && !isPlainObject(obj[value])) {
      obj[value] = obj[value];
    }
  }
  return obj;
}

function isPlainObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

// 이런식으로 새로운 객체에 할당해서 반환해주면 안남
function stringifyNumbers(obj) {
  let newObj = {};
  for (let value in obj) {
    // 만약 숫자면 string으로 변환한다
    if (typeof obj[value] === "number") {
      newObj[value] = obj[value].toString();
    }
    if (isPlainObject(obj[value])) {
      newObj[value] = stringifyNumbers(obj[value]);
    }
    if (typeof obj[value] !== "number" && !isPlainObject(obj[value])) {
      newObj[value] = obj[value];
    }
  }
  return newObj;
}

function isPlainObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
