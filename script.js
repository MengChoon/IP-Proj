$(document).ready(function () {
  $("#login-form").submit(function (e) {
    e.preventDefault();

    let email = $("#login-email").val();
    let password = $("#login-password").val();

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://projectip-7a75.restdb.io/rest/password?q={\"email\":\"" + email + "\"}",
      "method": "GET",
      "headers": {
        "content-type": "application/json",
        "x-apikey": "63dd0dbb3bc6b255ed0c45f6",
        "cache-control": "no-cache"
      }
    };

    $.ajax(settings).done(function (response) {
      if (response.length === 0) {
        alert("Incorrect email.");
      } else if (response[0].password !== password.toString()) {
        alert("Incorrect password.");
      } else {
        alert("Login successful!");
      }
    });
  });
});
