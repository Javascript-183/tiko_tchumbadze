function registerUser() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let address = document.getElementById("address").value;
    let res = document.getElementById("res");
    let phonenumber = document.getElementById("phonenumber").value;
    let postalcode = document.getElementById ("postalcode").value;

    let usernameRegex = /^[A-Za-z][A-Za-z0-9]*[0-9]$/gm
    let emailRegex = /^[A-z][A-z0-9_.+-]+@[A-z0-9.-]+\.[A-z]{2,5}$/gm
    let passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@!#$%?&*])[A-Za-z\d@!#$%?&*]{8,}$/gm
    let addressRegex = /^[A-Za-z]+$/gm
    let phonenumberRegex = /^\+\d{1,4}\d{9,12}$/gm
    let postalcodeRegex = /^[0-9]{4}$/gm
    // let newPassRegex = /^[A-Z](?=.*[A-z])(?=.*\d)(?=.*[@!#$%?&*])[A-z\d]{8,}[A-z@!#$%?&*]{1,}$/gm

    console.log(username.length)
    if (!usernameRegex.test(username) && username.length > 0) {
        res.innerHTML = 
        `
        <p style="color: red; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;"> Username is incorrect! </p>
        `
    } else if (!emailRegex.test(email) && email.length > 0) {
        res.innerHTML = 
        `
        <p style="color: red; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;"> Email is incorrect! </p>
        `
    } else if (!passwordRegex.test(password) && password.length > 0) {
        res.innerHTML = 
        `
        <p style="color: red; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;"> Password is incorrect! </p>
        `
    } else if (!addressRegex.test(address) && address.length > 0) {
        res.innerHTML = 
        `
        <p style="color: red; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;"> address is incorrect! </p>
        `
    } 
    else if (!phonenumberRegex.test(phonenumber) && phonenumber.length > 0) {
        res.innerHTML = 
        `
        <p style="color: red; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;"> phone number is incorrect! </p>
        `
    } 
    else if (!postalcodeRegex.test(postalcode) && postalcode.length > 0) {
        res.innerHTML = 
        `
        <p style="color: red; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;"> postal code is incorrect! </p>
        `
    } else {
        res.innerHTML = ''
    }


}