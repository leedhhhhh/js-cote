function averagePair(arr, num) {
  // 빈배열이면 false
  if (arr.length === 0) {
    return false;
  }

  // 쌍의 평균이라고 했기때문에 두 쌍의 합과 num * 2 의 값이 같은지 확인
  let i = 0;
  let j = 1;

  while (i < arr.length) {
    if (arr[i] + arr[j] === num * 2) {
      console.log(i, j, "첫번째");
      return true;
    }

    if (arr[i] + arr[j] !== num * 2) {
      console.log(i, j, "두번째");
      if (j === arr.length) {
        return false;
      } else {
        j++;
      }
    }

    if (j === arr.length) {
      console.log(i, j, "세번째");
      i++;
      j = i + 1;
    }
  }

  return false;
}

// averagePair 풀이
function averagePair(arr, num){
  let start = 0
  let end = arr.length-1;
  while(start < end){
    let avg = (arr[start]+arr[end]) / 2 
    if(avg === num) return true;
    else if(avg < num) start++
    else end--
  }
  return false;
}
