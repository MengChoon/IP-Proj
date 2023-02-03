const loginForm = document.querySelector('#login-form');
const signupForm = document.querySelector('#signup-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = loginForm.querySelector('#email').value;
  const password = loginForm.querySelector('#password').value;

  // send HTTP request to RESTdb API to log in
  fetch('https://projectip-7a75.restdb.io/rest/password', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then(response => response.json())
    .then(data => {
      // handle successful login
    })
    .catch(error => {
      // handle error
    });
});

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = signupForm.querySelector('#email').value;
  const password = signupForm.querySelector('#password').value;

  // send HTTP request to RESTdb API to sign up
  fetch('https://api.restdb.io/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then(response => response.json())
    .then(data => {
      // handle successful signup
    })
    .catch(error => {
      // handle error
    });
});
