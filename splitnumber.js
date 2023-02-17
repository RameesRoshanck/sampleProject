function splitNumber(number) {
    const numberString = number.toString();
    const numberArray = [...numberString];
    const result = numberArray.map(char => parseInt(char));
    return result;
  }
  console.log(splitNumber(931));