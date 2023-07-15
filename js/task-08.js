const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const typedEmail = loginForm.elements.email;
  const typedPassword = loginForm.elements.password;


  const emailValue = typedEmail.value.trim();
  const passwordValue = typedPassword.value.trim();


  if (emailValue === '' || passwordValue === '') {
    alert('Fill the empty area!');
    return; 
  }


  const formData = {
    email: emailValue,
    password: passwordValue,
  };


  console.log(formData);

  loginForm.reset();
});

