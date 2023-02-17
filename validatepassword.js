function validatePassword(password) {
    const errors = [];
    
    if (password.length < 8) {
      errors.push("Password should have a minimum length of 8 characters.");
    }
    
    if (!/\d/.test(password)) {
      errors.push("Password should contain at least one number.");
    }
    
    if (!/[A-Z]/.test(password)) {
      errors.push("Password should contain at least one uppercase letter.");
    }
    
    if (!/[*\-\+$#]/.test(password)) {
      errors.push("Password should contain at least one of the following special characters: *, -, +, $, #.");
    }
    
    return errors.length === 0 ? "Password is valid." : errors;
  }
  
  
  
  const password = "MyP@-ssword123";
  const result = validatePassword(password);
  console.log(result);