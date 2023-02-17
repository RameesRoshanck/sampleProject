function Prime(num) {
    if (num < 2) {
      return 2;
    }
    let isPrime = false;
    while (!isPrime) {
      num++;
      isPrime = true;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }
    }
    return num;
  }
  
  console.log(Prime(115));