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



// 다른 정답 (이게 더 좋은거같음 비교적 간결하고 객체를 두개 선언할 필요도 없고 두번째 for문 구문에서 -1 을 해주면서 하나씩 없애는거도 좋은 방법인거같음
function validAnagram(firstStr, secondStr) {
  // 글자의 개수가 다르면 false 반환
  if (firstStr.length !== secondStr.length) {
    return false;
  }

  const letterCount = {};

  // 첫 번째 문자열의 빈도수 세기
  for (let char of firstStr) {
    letterCount[char] = (letterCount[char] || 0) + 1;
  }

  // 두 번째 문자열의 빈도수와 첫 번째 문자열의 빈도수 비교
  for (let char of secondStr) {
    if (!letterCount[char]) {
      return false; // 문자가 없거나 0이면 애너그램이 아님
    } else {
      letterCount[char] -= 1;
    }
  }

  return true;
}

// 테스트 케이스
console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true

