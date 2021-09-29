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

function reformat(str = '') {
  if (str == '') return '';
  var strWithoutVowels = str.replace(/[aeiou]/ig,'');
  return strWithoutVowels.charAt(0).toUpperCase() + strWithoutVowels.slice(1).toLowerCase();
}