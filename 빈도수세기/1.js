// 빈도수 세기- validAnagram
// 두 개의 문자열이 주어졌을 때, 두 번째 문자열이 첫 번째 문자열의 애너그램인지 확인하는 함수를 작성합니다. 애너그램은 다른 글자의 글자를 재배열하여 형성된 단어, 구 또는 이름입니다. (예시: cinema -> iceman)

function validAnagram(firstStr, secondStr) {
  // 글자의 개수가 다르면 false 반환
  if (firstStr.length !== secondStr.length) {
    return false;
  }

  // 동등하게 비교하는게 아니라 각 문자의 개수가 같으면 된다
  const firstStrValueObj = {};

  for (let str of firstStr) {
    // 아예 없을때
    if (firstStrValueObj[str] === undefined) {
      firstStrValueObj[str] = 0;
    }
    // 0 이상일때
    if (firstStrValueObj[str] >= 0) {
      firstStrValueObj[str] = firstStrValueObj[str] + 1;
    }
  }

  const secondStrValueObj = {};

  for (let str of secondStr) {
    // 아예 없을때
    if (secondStrValueObj[str] === undefined) {
      secondStrValueObj[str] = 0;
    }
    // 0 이상일때
    if (secondStrValueObj[str] >= 0) {
      secondStrValueObj[str] = secondStrValueObj[str] + 1;
    }
  }

  for (let value in firstStrValueObj) {
    // firstStrValueObj 안에 있는 값들이 secondStrValueObj 에 없으면 false
    if (!(value in secondStrValueObj)) {
      return false;
    }

    // firstStrValueObj , secondStrValueObj value 비교 개수가 맞아야함 하나라도 다르면 false
    if (secondStrValueObj[value] !== firstStrValueObj[value]) {
      return false;
    }
  }

  return true;
}
console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false) // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
