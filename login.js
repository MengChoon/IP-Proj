$("#update-contact-submit").on("click", function (e) {
    e.preventDefault();
    //retrieve all my update form values
    let contactName = $("#update-contact-name").val();
    let contactEmail = $("#update-contact-email").val();
    let contactMsg = $("#update-contact-msg").val();
    let contactId = $("#update-contact-id").val();

    console.log($("#update-contact-msg").val());
    console.log(contactMsg);

    var jsondata = {
        "field1": contactName,
        "field2": contactEmail,
        "field3": contactMsg,
        "field4": contactId
    };
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://projectip-7a75.restdb.io/rest/passwordhttps://projectip-7a75.restdb.io/rest/password",
        "method": "POST",
        "headers": {
          "content-type": "application/json",
          "x-apikey": "<63dd0dbb3bc6b255ed0c45f6>",
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata)
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        // add a confirmation message when the data is sent successfully
        alert("Data sent successfully!");
    });
}); //end updatecontactform listener
