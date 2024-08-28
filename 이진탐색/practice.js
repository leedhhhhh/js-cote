// 이진탐색
//정렬된 배열과 값을 받아들이고 값이 존재하는 경우 그 인덱스를 반환하는 binarySearch라는 함수를 작성합니다. 값이 존재하지 않으면 -1을 반환합니다.
/*
binarySearch([1,2,3,4,5],2) // 1
binarySearch([1,2,3,4,5],3) // 2
binarySearch([1,2,3,4,5],5) // 4
binarySearch([1,2,3,4,5],6) // -1
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10) // 2
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95) // 16
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100) // -1
*/

// 나의 풀이에선 -1을 받아올 경우를 생각 못하고 코드를 짰다가 failed가 떴다. 그래서 수정을 했는데 테스트케이스에서 어떤건 맞고 어떤건 틀려서 계속 고민을 해봤는데 결국 풀리지않았다. 답은 그냥 while 문에 조건을 넣는거였는데
// 난 아직 부족한듯.. 이건 내 풀이
function binarySearch(arr, num) {
  let startPoint = 0;
  let lastPoint = arr.length - 1;
  let middlePoint = Math.ceil((startPoint + lastPoint) / 2);
  while (arr[middlePoint] !== num) {
    if (num < arr[middlePoint]) {
      lastPoint = middlePoint - 1; 
    }

    if (num > arr[middlePoint]) {
      startPoint = middlePoint + 1;
    }

    middlePoint = Math.ceil((startPoint + lastPoint) / 2);

    if (middlePoint === startPoint) {
      return -1;
      break;
    }
  }
  return middlePoint;
}

// 이건 풀이법
function binarySearch(arr, num) {
  // add whatever parameters you deem necessary - good luck!
  let startPoint = 0;
  let lastPoint = arr.length - 1;
  let middlePoint = Math.ceil((startPoint + lastPoint) / 2);

  while (arr[middlePoint] !== num && startPoint <= lastPoint) {
    if (num < arr[middlePoint]) {
      lastPoint = middlePoint - 1; 
    }

    if (num > arr[middlePoint]) {
      startPoint = middlePoint + 1; 
    }
    middlePoint = Math.ceil((startPoint + lastPoint) / 2);
  }
  return arr[middlePoint] === num ? middlePoint : -1;
}

// 좀 더 이런 사고를 할 순 없을까 잘하고싶은데
