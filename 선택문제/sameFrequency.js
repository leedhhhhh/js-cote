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
