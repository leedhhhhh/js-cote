// 정렬된 배열을 받아들이고 배열의 고유 값을 세는 countUniqueValues라는 함수를 구현합니다.
// 배열에 음수가 있을 수 있지만 항상 정렬됩니다.

function countUniqueValues(arr) {
  let obj = {};
  for (let val of arr) {
    obj[val] = (obj[val] || 0) + 1;
  }

  return Object.keys(obj).length;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4



// 문제풀이.. 나는 다중포인터를 쓰지않고 그냥 객체에 담아서 key 개수로 비교했다 물론 이거도 O(n)이고 정렬되지않는 배열에서는 사용할수있다고 하지만 문제의 취지랑 맞지않았다고 해야하나? 좀 더 배운걸 써먹어보는 연습을 해야겠다.

function countUniqueValues(arr) {
  if (!arr.length) return 0;
  let left = 0;
  let right = 1;
  let count = 1;
  while (right < arr.length) {
    if (arr[left] === arr[right]) {
      right++;
    } else if (arr[left] !== arr[right]) {
      left = right;
      count++;
    }
  }
  return count;
}

console.log(countUniqueValues([1,1,1,2,3,3,4,4,4,4])); // 4
