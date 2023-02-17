
function isPalindrome(num) {
    const numStr = num.toString();
    for (let i = 0; i < numStr.length / 2; i++) {
      if (numStr[i] !== numStr[numStr.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  
  console.log(isPalindrome(1441))