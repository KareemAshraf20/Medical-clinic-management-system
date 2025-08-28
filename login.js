window.onload = () => {
    this.localStorage.setItem("Username", Username.value);
    this.localStorage.setItem("Password", Password.value);
}
let input = document.getElementsByTagName('input');
let submit = document.getElementById('submit');
let form = document.querySelector('form');
form.onsubmit = () => { return false }
submit.onclick = () => {
    if ((input[0].value != "") && (input[1].value != "")) {
        if ((input[0].value == localStorage.getItem("Username")) && (input[1].value == localStorage.getItem("Password"))) {
            form.onsubmit = () => { return 1 }
        }
        else {
            if ((input[0].value != localStorage.getItem("Username"))) {
                // input[0].nextElementSibling.textContent.Username = " The Username is incorrect. ";
                window.alert("The Username is incorrect.");
                if ((input[1].value != localStorage.getItem("Password"))) {
                    // input[1].nextElementSibling.textContent.Password = " The Password is incorrect.";
                    window.alert("The Password is incorrect.");
                }
            }
        }
    }
    else if (input[0].value == "" && input[1].value == "") {
        window.alert("Please enter the username and password");
    }
    else {
        if (input[0].value == "") {
            // input[0].nextElementSibling.textContent.Username = "Please enter the username";
            window.alert("Please enter the username");
        }
        if (input[1].value == "") {
            // input[1].nextElementSibling.textContent.Password = "Please enter the password";
            window.alert("Please enter the password");
        }
    }
}

