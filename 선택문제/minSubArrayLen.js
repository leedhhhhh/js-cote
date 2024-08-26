// 못풀었음..

function minSubArrayLen(nums, sum) {

}

// arr의 값 중에 합이 num보다 가장 크거나 같은 값들의 개수를 return 하라
// minSubArrayLen([2,3,1,2,4,3], 7) 6  
//                 0 1 2 3 4 5


// minSubArrayLen 함수 솔루션
function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
 
  while (start < nums.length) {
    // if current window doesn't add up to the given sum then 
		// move the window to right
    if(total < sum && end < nums.length){
      total += nums[end];
			end++;
    }
    // if current window adds up to at least the sum given then
		// we can shrink the window 
    else if(total >= sum){
      minLen = Math.min(minLen, end-start);
			total -= nums[start];
			start++;
    } 
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
    else {
      break;
    }
  }
 
  return minLen === Infinity ? 0 : minLen;
}
