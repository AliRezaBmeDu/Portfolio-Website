const form = document.getElementById('contact-form');
const emailInput = form.elements['userEmail'];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(emailInput.value)
    const isValid = validEmail(emailInput.value);
    if (isValid) {
      form.submit();
    }
  });

  //function to check if the email text has any error or not
  function validEmail(email){
    console.log(email)
    const testRegex = /[A-Z&#~!$]/;
    console.log(testRegex.test(email));
    if(testRegex.test(email)){
        console.log('invalid-email');
        console.log('check');
        var lastElement = document.querySelector('.getintouch');
        const lastElementRect = lastElement.getBoundingClientRect();
        
        console.log(lastElement.value);
        

        //Create the error message element
        var errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.innerHTML = 'please make sure your email is in small letters';
        //Set the position of the error message
        errorMessage.style.top = (lastElementRect.bottom + window.scrollY) + 'px';
        errorMessage.style.left = (lastElementRect.right + window.scrollX) + 'px';

        //Append the error message to the document body
        document.body.appendChild(errorMessage);

    }
    return false
  }
