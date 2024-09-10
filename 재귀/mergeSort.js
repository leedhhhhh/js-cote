// 합병정렬에 재귀를 사용한 내용

function merge(arr1, arr2) {
  let mergedArr = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < arr1.length && rightIndex < arr2.length) {
    if (arr1[leftIndex] <= arr2[rightIndex]) {
      mergedArr.push(arr1[leftIndex]);
      leftIndex++;
    } else {
      mergedArr.push(arr2[rightIndex]);
      rightIndex++;
    }
  }
  while (leftIndex < arr1.length) {
    mergedArr.push(arr1[leftIndex]);
    leftIndex++;
  }
  while (rightIndex < arr2.length) {
    mergedArr.push(arr2[rightIndex]);
    rightIndex++;
  }

  return mergedArr;
}

// 10 24 76 73 72 1 9
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([10, 24, 76, 73, 1]));


// 밑에는 내가 이해하기 쉽도록 그냥 풀어놓은 주석

/*
[10, 24,  76, 73, 1]

MergeSort([10,24,76,73,1])

margeSort([10,24]) , mergeSort([76,73,1])
 
margeSort([10,24])  예가 먼저 재귀를 타

mergeSort([10]) ,mergeSort([24]) 

10 , 24을 머지해서

[10,24] 돼


mergeSort([76,73,1]) 그다음 right인 얘가 타

mergeSort([76]) , mergeSort([73,1])

mergeSort([76]) 은 [76] 이야

mergeSort([73,1])는 다시 나뉘어서 

mergeSort([73]), mergeSort([1])

그럼 [73,1]이 돼

그럼 [76]과 [73,1] 을 머지해서 [1,73,76]이 돼

그럼 최종적으로
[10,24]  [1,73,76] 머지해서

[1,10,24,73,76] 돼
*/
