$("#update-contact-submit").on("click", function (e) {
    e.preventDefault();
    //retrieve all my update form values
    let contactName = $("#update-contact-name").val();
    let contactEmail = $("#update-contact-email").val();
    let contactMsg = $("#update-contact-msg").val();
    let contactId = $("#update-contact-id").val();

    console.log($("#update-contact-msg").val());
    console.log(contactMsg);

    //[STEP 12a]: We call our update form function which makes an AJAX call to our RESTDB to update the selected information
    updateForm(contactId, contactName, contactEmail, contactMsg);
  });//end updatecontactform listener
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://dogstastelikechicken-8d4e.restdb.io/rest/callmemaybe",
    "method": "GET",
    "headers": {
      "content-type": "application/json",
      "x-apikey": "<63b78b14969f06502871ab0d>",
      "cache-control": "no-cache"
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
  