function konversiMenit(menit) {
    // you can only write your code here!
    const mm = parseInt(menit / 60);
    const ss = menit % 60;
    return (ss < 10) ? `${mm}:0${ss}` : `${mm}:${ss}`;
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00