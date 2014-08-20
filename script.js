$(function(){

  function checkname() {                                          // Declare function
    var elMsg = $("#feedback");              // Get feedback element
    if (this.value.length < 2) {                                  // If name too short
      elMsg.text("Name must be 2 characters or more");    // Set msg
    } else {                                                      // Otherwise
      elMsg.text("Your name has been added to our records.");                                     // Clear msg
    }
  }

  var elname = $("#name");                   // Get name input
  // When it loses focus call checkname()
  elname.on("blur", checkname);

  function checkemail(){
    var email = $("#emailfeedback");
    if (this.value.length < 2) {
      email.text("You must submit a valid e-mail address");
    }
    else{
      email.text("Your e-mail has been added to our records");
    }
  }

  var elemail = $("#email");
  elemail.on("blur", checkemail);

});

