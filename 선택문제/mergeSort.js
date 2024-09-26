function mergeSort(arr) {
  if (arr.length === 1) return arr;
  let halfNum = Math.ceil(arr.length / 2);
  let leftArr = mergeSort(arr.slice(0, halfNum));
  let rightArr = mergeSort(arr.slice(halfNum));

  return merge(leftArr, rightArr);
}

function merge(left, right) {
  let newArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      newArr.push(left[leftIndex]);
      leftIndex++;
    } else if (left[leftIndex] > right[rightIndex]) {
      newArr.push(right[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < left.length) {
    newArr.push(left[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < right.length) {
    newArr.push(right[rightIndex]);
    rightIndex++;
  }

  return newArr;
}
// merge([1, 3, 5], [2, 4, 6]);
console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]));
