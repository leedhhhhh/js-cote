function maxSubarraySum(arr, num) {
  // num 숫자대로 배열을 자른다.
  // reduce를 사용하여 합계를 구하고 Math.max를 사용하여 최대값 구한다.
  if (arr.length < num) {
    return null;
  }

  let maxValue;
  for (let i = 0; i < arr.length - num + 1; i++) {
    if (i === 0) {
      maxValue = arr.slice(i, num + i).reduce((a, b) => a + b);
    }

    if (i > 0) {
      let sumValue = arr.slice(i, num + i).reduce((a, b) => a + b);
      maxValue = Math.max(maxValue, sumValue);
    }
  }

  return maxValue;
}

// maxSubArray 솔루션
function maxSubarraySum(arr, num){
    if (arr.length < num) return null;
 
    let total = 0;
    for (let i=0; i<num; i++){
       total += arr[i];
    }
    let currentTotal = total;
    for (let i = num; i < arr.length; i++) {
       currentTotal += arr[i] - arr[i-num];
       total = Math.max(total, currentTotal);
    }
    return total;
}
