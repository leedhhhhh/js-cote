//문자열을 받아들이고 그 문자열의 역순인 문자열을 반환하는 reverse 함수를 작성합니다.
function reverse(str) {
  let newStr = "";
  if (str.length - 1 === 0) return str;
  newStr = newStr.concat(str[str.length - 1]);

  return newStr + reverse(str.slice(0, str.length - 1));
}
