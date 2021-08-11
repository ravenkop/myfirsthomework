function validateForm() {
    event.preventDefault();
    var fname = document.getElementById("firstname");
    var lname = document.getElementById("lastname");
    var password = document.getElementById("password");
    var email = document.getElementById("emailaddress");
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (fname.value == "") {
        document.getElementById("errorfname").innerHTML = "First name cannot be empty";
        return false;
    }
    if (lname.value == "") {
        document.getElementById("errorlname").innerHTML = "Last name cannot be empty";
        // alert("Last name cannot be empty");
        return false;
    }
    if (password.value == "") {
        document.getElementById("errorpass").innerHTML = "Password cannot be empty";
        alert("Password cannot be empty");
        return false;
    }
    if (!email.value.match(mailformat)) {

        alert("Please enter a valid email address");
        document.input.EmailAddress.focus();
        return false;
    }


}