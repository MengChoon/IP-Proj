var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register(){
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "110px";
}

function login(){
  x.style.left = "50px ";
  y.style.left = "450px";
  z.style.left = "0";
}

const registerForm = document.getElementById('register');
registerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = registerForm.elements.name.value;
  const password = registerForm.elements.password.value;
  const email = registerForm.elements.email.value;
  
  if (!name || !password || !email) {
    console.error('Name, password, and email are required fields');
    alert('Name, password, and email are required fields');
    return;
  }

  const url = 'https://projectip-7a75.restdb.io/rest/password';
  const apiKey = '63dd0dbb3bc6b255ed0c45f6';

  const request = new XMLHttpRequest();
  request.open('POST', url, true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.setRequestHeader('x-apikey', apiKey);

  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      console.log('Registration successful');
      alert('Registration successful');
    } else {
      console.error('Registration failed');
      alert('Registration failed');
    }
  };

  request.onerror = function () {
    console.error('Registration failed');
    alert('Registration failed');
  };

  request.send(JSON.stringify({ name, password, email }));
});

const loginForm = document.getElementById('login');
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = loginForm.elements.name.value;
  const password = loginForm.elements.password.value;
  
  if (!name || !password) {
    console.error('Name and password are required fields');
    alert('Name and password are required fields');
    return;
  }

  const url = 'https://projectip-7a75.restdb.io/rest/password?q={"name":"' + name + '", "password":"' + password + '"}';
  const apiKey = '63dd0dbb3bc6b255ed0c45f6';

  const request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.setRequestHeader('x-apikey', apiKey);

  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      const response = JSON.parse(request.responseText);
      if (response.length === 0) {
        console.error('Login failed');
        alert('Login failed');
        return;
      }
      console.log('Login successful');
      alert('Login successful');
      // Save username to local storage
      localStorage.setItem('username', name);
      window.location.href = 'index.html';
    } else {
      console.error('Login failed');
      alert('Login failed');
    }
  };

  request.onerror = function () {
    console.error('Login failed');
    alert('Login failed');
  };

  request.send();
});
/*********lottie */
var animation = bodymovin.loadAnimation({
  container: document.getElementById('animation'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://lottie.host/511c4495-f98a-451d-9375-f04116c7e405/ACgdXP5Y97.json'
});
const animationContainer = document.getElementById('animation');
animationContainer.addEventListener('click', () => {
  window.location.href = 'index.html';
});
