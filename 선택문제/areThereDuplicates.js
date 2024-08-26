function areThereDuplicates(...arg) {
  if (arg.length === 0) {
    return false;
  }

  let obj = {};
  for (let val of arg) {
    obj[val] = !obj[val] ? 1 : obj[val] + 1;
  }

  for (let val1 of Object.values(obj)) {
    if (val1 > 1) {
      return true;
    }
  }

  return false;
}
