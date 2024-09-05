function collectStrings(obj) {
  let newArr = [];
  for (let key in obj) {
    // string이면 배열에 넣는다
    if (typeof obj[key] === "string") {
      newArr.push(obj[key]);
    }
    if (checkVaule(obj[key])) {
      newArr = newArr.concat(collectStrings(obj[key]));
    }
  }
  return newArr;
}

function checkVaule(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
