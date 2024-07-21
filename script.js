addEventListener ("DOMContentLoaded", (event) => {

  const form = document.getElementById('registration-form');
  const feedbackDiv = document.getElementById('form-feedback');

  const sebValue = form.value;

  function submitForm(event){
    event.preventDefault()
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    let isValid = true;

    const messages= [];

    if(usernameValue.length <3){
      isValid = false;
      messages.push('usename is invalid')

    }

    if(!emailValue.includes('@') || !emailValue.includes('.')){
      isValid = false;
      messages.push('email is invalid')

    }

    if(passwordValue.length <8){
      isValid = false;
      messages.push(' password length is not enough')

    }

    feedbackDiv.style.display='block'
    if(isValid){
      feedbackDiv.textContent = 'Registration successful';
      feedbackDiv.style.color ='#28a745';
    }else{
      feedbackDiv.innerHTML=messages.join('<br>');
      feedbackDiv.style.color ='#dc3545';
    }
  
  }

  form.addEventListener('submit',submitForm)

});

