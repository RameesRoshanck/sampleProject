function abc(expression) {
    const sum = expression.split(' ');
    const operator = sum[1];
    const a = parseInt(sum[0]);
    const b = parseInt(sum[2]);
    
    switch (operator) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return a / b;
      case '%':
        return a % b;
      default:
        throw new Error('Invalid operator');
    }
  }
  
  console.log(abc('12 - 10'))