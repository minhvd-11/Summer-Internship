function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var re_password = document.getElementById("re_password").value;
    let check = true;

    if (username == "") {
        document.getElementById("alert_username").textContent = "User is required";
        check = false;
    } else {
        document.getElementById("alert_username").textContent = "";
    }
    if (password == "") {
        document.getElementById("alert_password").textContent = "Pass is required";
        check = false;
    } else {
        document.getElementById("alert_password").textContent = "";
    }
    if (re_password == "") {
        document.getElementById("alert_re_password").textContent = "Re_Pass is required";
        check = false;
    } else {
        document.getElementById("alert_re_password").textContent = "";
    }
    if (password != re_password && (password != "" && re_password != "" && username != "")) {
        document.getElementById("alert_re_password").textContent = "Password and confirm password do not match"
        check = false;
    }

    if (check == true) {
        document.getElementById("success").textContent = "You have registered successfully";
    } else {
        document.getElementById("success").textContent = "";
    }
}