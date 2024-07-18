function validateForm() {
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();
    var confirmPassword = document.getElementById('confirmPassword').value.trim();
    var errorElement = document.getElementById('error');
    
    // Reset previous error messages
    errorElement.innerHTML = '';
  
    // Check if any field is empty
    if (username === '' || password === '' || confirmPassword === '') {
      errorElement.innerHTML = 'All fields are required';
      return false;
    }
  
    // Check if passwords match
    if (password !== confirmPassword) {
      errorElement.innerHTML = 'Passwords do not match';
      return false;
    }
  
    // Additional validation can be added here if needed
  
    // If all validations pass
    return true;
  }
  