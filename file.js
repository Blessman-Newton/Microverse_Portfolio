// /* ---------------------Form validation code below----------------------------- */
// function handleSubmit(event) {
//   event.preventDefault(); // Prevents the form from being submitted

//   const form = document.getElementById('myForm');
//   const emailField = document.getElementById('emailField');
//   const errorMessage = document.getElementById('errorField');
//   const inputValue = emailField.value;

//   // Check if the input contains any lowercase letters
//   if (/[A-Z]/.test(inputValue)) {
//     errorMessage.textContent = 'Input should not contain upperrcase letters.';
//   } else {
//     errorMessage.textContent = ''; // Clear the error message
//     // Proceed with form submission
//     form.submit();
//   }
// }

// /* ---------------------Form validation code above----------------------------- */