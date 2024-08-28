/*
전달된 문자열이 팔린드롬(앞으로 읽으나 뒤로 읽으나 동일한 문자)인 경우 
true 를 반환하는 isPalindrome이라는 재귀(recursive) 함수를 작성하시오. 팔린드롬이 아닐 경우 false 를 반환합니다.
*/

function reverse(str) {
  let newStr = "";
  if (str.length - 1 === 0) return str;
  newStr = newStr.concat(str[str.length - 1]);

  return newStr + reverse(str.slice(0, str.length - 1));
}

function isPalindrome(str) {
  if (str.length === 1) return true;
  return reverse(str) === str;
}
