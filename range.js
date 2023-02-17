function isInRange(num, min, max) {
    if (num >= min && num <= max) {
      return true;
    } else {
      return false;
    }
  }
  console.log(isInRange(20, 10, 50));