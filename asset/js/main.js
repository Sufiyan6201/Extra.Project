function validate() {
  var name = document.getElementById("name").value
  var email = document.getElementById("email").value
  var password = document.getElementById("password").value
  if (name == true || email == true) {
    return true;
  } else {
    if (name == "") {
      console.log("Name  is empty")
      document.getElementById("error_name").innerHTML = "Name cannot be Empty"

    } else {
      document.getElementById("error_name").innerHTML = "";
    }
    if (email == "") {
      console.log("Email  is empty")
      document.getElementById("error_email").innerHTML = "Email cannot be Empty"

    } else {
      document.getElementById("error_email").innerHTML = "";
    }
    if (password == "") {
      document.getElementById("error_password").innerHTML = "Password cannot be Empty";
    } else if (password.length < 6) {
      document.getElementById("error_password").innerHTML ="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters";
    }
    else {
      document.getElementById("error_password").innerHTML = "<span id='spen'>Login Succesfuly</span>";
    }
  } return false;
}