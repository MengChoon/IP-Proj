
var menuitems = document.getElementById("menuitems");
menuitems.style.maxHeight="0px";
function menutoggle(){
    if(menuitems.style.maxHeight=="0px")
        {
            menuitems.style.maxHeight="200px"
        }
    else
        {
            menuitems.style.maxHeight="0px"
        }
}
/*product-gallery */
var ProductImg = document.getElementById("Productimg");
var Smallimg = document.getElementsByClassName("small-img");

if (Smallimg.length > 0) {
  Smallimg[0].onclick = function() {
    ProductImg.src = Smallimg[0].src;
  }

  if (Smallimg.length > 1) {
    Smallimg[1].onclick = function() {
      ProductImg.src = Smallimg[1].src;
    }
  }

  if (Smallimg.length > 2) {
    Smallimg[2].onclick = function() {
      ProductImg.src = Smallimg[2].src;
    }
  }

  if (Smallimg.length > 3) {
    Smallimg[3].onclick = function() {
      ProductImg.src = Smallimg[3].src;
    }
  }
}
/*******contact************* */
const form = document.querySelector('.contact-form');
form.addEventListener("submit", function(event) {
  event.preventDefault();
});

async function SubmitContact() {
  const data = {
    name: document.getElementById('name').value,
    number: document.getElementById('number').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value
  };

  const response = await fetch('https://dogstastelikechicken-8d4e.restdb.io/rest/callmemaybe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-apikey': '63b78b14969f06502871ab0d'
    },
    body: JSON.stringify(data)
  });

  if (response.ok) {
    console.log('Message sent successfully');
  } else {
    console.error('Failed to send message');
  }
  if (response.ok) {
    alert('Message sent successfully');
  } else {
    alert('Failed to send message');
  }
}
/***test */
const accountLink = document.getElementById("accountLink");

if (localStorage.getItem("username")) {
  accountLink.href = "logged-in.html";
}
/****************lottie */
