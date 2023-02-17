function longestIndex(strings) {
    let maxLength = 0;
    let maxIndex = -1;
    
    for (let i = 0; i < strings.length; i++) {
      const length = strings[i].length;
      if (length > maxLength) {
        maxLength = length;
        maxIndex = i;
      }
    }
    
    return [strings[maxIndex], maxIndex];
  }
  
  console.log(longestIndex(['architect', 'help', 'concentrate']));