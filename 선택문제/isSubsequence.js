function isSubsequence(firstStr, secondStr) {
  //순서대로 포함이 되는지 확인

  // 첫자리 수가 있는 곳부터 index를 다시 잡아야한다
  /**
   * 예를 들어
   * abc , aebc 이면
   * a는 index 0에 있으니 b는 무조건 1부터 있어야한다는거임
   */

  let i = 0;
  let j = 0;

  while (i < firstStr.length) {
    console.log(firstStr[i], secondStr[j]);
    if (firstStr[i] === secondStr[j]) {
      i++;
      j++;
    } else if (firstStr[i] !== secondStr[j]) {
      j++;
    }

    if (j > secondStr.length) {
      return false;
    }
  }
  return true;
}

// isSubsequence 솔루션 - 반복
function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}
// isSubsequence 솔루션 – O(1) 공간이 아닌 재귀
function isSubsequence(str1, str2) {
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
  return isSubsequence(str1, str2.slice(1))
}
