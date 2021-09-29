function repeat(arr= [], repeatNumber = 3) {
  if (Array.isArray(arr)) {
    var result = [];
    if (arr.length == 0) return '';

    for(i = 0; i < repeatNumber; i++) {
      arr.map(item => result.push(item));
    }
    return result;
  }
}