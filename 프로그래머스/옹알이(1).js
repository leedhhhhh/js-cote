/*
머쓱이는 태어난 지 6개월 된 조카를 돌보고 있습니다. 
조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음을 최대 한 번씩 사용해 조합한(이어 붙인) 발음밖에 하지 못합니다. 
문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.
*/

function solution(babbling) {
  let strArr = ["aya", "ye", "woo", "ma"];

  for (let i = 0; i < babbling.length; i++) {
    for (let j = 0; j < strArr.length; j++) {
      if (
        babbling[i].startsWith(strArr[j]) ||
        babbling[i].endsWith(strArr[j])
      ) {
        if (babbling[i].startsWith(strArr[j])) {
          babbling[i] = babbling[i].slice(strArr[j].length);
        }
        if (babbling[i].endsWith(strArr[j])) {
          babbling[i] = babbling[i].slice(0, -strArr[j].length);
        }
      }
    }
  }
  return babbling.filter((item) => item === "" || strArr.includes(item)).length;
}

solution(["aya", "yee", "u", "maa", "wyeoo"]); //	1
solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]); //3
console.log(solution(["aya", "ye", "woo", "ma", "ayawooyema"]));



// 회고

// 조건을 충족하기 때문에 문제에서 제시된 규칙 안에서는 큰 문제가 없을 수 있지만, 
// 일반적인 경우에는 지금처럼 짠 코드는 예상하지 못한 상황에서 잘못된 결과를 낼 수 있습니다. 
// 문제의 범위가 제한되어 있어 작동할 수 있지만, 개선의 여지가 있는 코드는 맞습니다.

// 발음 조합의 연속성 문제: 문제에서 각 발음은 최대 한 번만 사용할 수 있다고 했으므로, startsWith와 endsWith를 같이 사용하는 방식으로는 발음을 연속으로 이어 붙이는 경우를 제대로 처리하지 못할 수 있습니다. 예를 들어 "ayaaya" 같은 경우, 처음 발음은 처리되지만 두 번째 "aya"는 제대로 처리되지 않을 수 있습니다.

// 발음을 중복 사용하지 않음: babbling[i].startsWith나 endsWith를 사용해 각 발음을 잘라내는 방식이지만, 이는 문자열이 특정 발음으로만 시작하거나 끝나지 않는 경우를 완벽하게 처리하지 못할 수 있습니다.

// 최종 필터링 부분: filter 부분에서는 빈 문자열을 포함하거나 발음 배열에 포함된 단어만을 체크하지만, 조카가 실제로 발음할 수 있는 조합들을 제대로 확인하지 못할 가능성이 큽니다.
