function xo(str) {
    // you can only write your code here!
    countO = 0;
    countX = 0;
    for (let i = 0; i < str.length; i++) {
        (str[i] === "o") ? countO++ : countX++;
    }
    return (countO === countX) ? true : false;
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true