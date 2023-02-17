function countOddEven(arr) {
    let oddCount = 0;
    let evenCount = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
    return `Odd: ${oddCount} \n Even: ${evenCount}`;
  }
  
  console.log(countOddEven([50,40, 20, 25, 55, 85, 35]));