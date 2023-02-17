function addAtStart(array, num) {
    array.unshift(num);
    return array;
  }
  
  // 2. remove last element
  function removeLast(array) {
    array.pop();
    return array;
  }
  
  // 3. add element at 2nd index
  function addAtIndex(array, index, element) {
    array.splice(index, 0, element);
    return array;
  }
  
  // 4. remove first element
  function removeFirst(array) {
    array.shift();
    return array;
  }
  
  // 5. add new last element
  function addAtEnd(array, element) {
    array.push(element);
    return array;
  }
  
  let myArray = [1, 2, 3, 4, 5];
  
  console.log(addAtStart(myArray, 0)); 
  console.log(removeLast(myArray));      
  console.log(addAtIndex(myArray, 2, 10));
  console.log(removeFirst(myArray));
  console.log(addAtEnd(myArray, 6));