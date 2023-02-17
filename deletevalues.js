function deleteValues(array, indexes) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (!indexes.includes(i)) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  }
  
  console.log(deleteValues([5, 8, 7, 12, 13], [1, 3, 4]));