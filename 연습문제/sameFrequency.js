// sameFrequency라는 함수를 작성하세요. 두 개의 양의 정수가 주어졌을 때, 두 숫자의 자릿수가 같은 빈도를 갖는지 구합니다.
// 여러분의 솔루션은 반드시 다음과 같은 복잡성을 가져야 합니다.:

// Time: O(N)

function sameFrequency(firstCnt, secondCnt) {
  // 양의정수가 아니면 false
  if (firstCnt < 0 || secondCnt < 0) {
    return false;
  }

  //자릿수가 같아야함
  if (String(firstCnt).length !== String(secondCnt).length) {
    return false;
  }

  let obj = {};
  for (let val of String(firstCnt)) {
    obj[val] = (!obj[val] || 0) + 1;
  }

  let secondObj = {};

  for (let val of String(secondCnt)) {
    secondObj[val] = (!secondObj[val] || 0) + 1;
  }

  for (let val in obj) {
    if (obj[val] !== secondObj[val]) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(182, 182)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
