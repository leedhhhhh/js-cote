// capitalizeFirst라는 재귀 함수를 작성하시오.
// 문자열 배열이 주어지면 배열에 있는 각 문자열의 첫 글자를 대문자로 바꿔주는 함수입니다.
function capitalizeFirst(strArr) {
  let newArr = [];
  for (let value of strArr) {
    let firstStr = value[0];
    let secondStr = value.slice(1, value.length);
    let newStr = firstStr.toLocaleUpperCase() + secondStr;
    newArr.push(newStr);
  }
  return newArr;
}
