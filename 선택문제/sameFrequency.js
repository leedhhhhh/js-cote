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

//풀이

// sameFrequency 솔루션
function sameFrequency(num1, num2){
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if(strNum1.length !== strNum2.length) return false;
  
  let countNum1 = {};
  let countNum2 = {};
  
  for(let i = 0; i < strNum1.length; i++){
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }
  
  for(let j = 0; j < strNum1.length; j++){
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }
  
  for(let key in countNum1){
    if(countNum1[key] !== countNum2[key]) return false;
  }
 
  return true;
}
