// import { generateString } from "./stringGenerator.js";
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = '';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        result = result + characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function userRegistration() {
    let firstLastName = document.getElementById('firstLastName');
    let email = document.getElementById(`email`);
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    let errorMessage = document.getElementById("error");
    let result = document.getElementById("result")
    let savePassword = document.getElementById("savePass").checked;

    let nameValidator = /^[a-zA-Z '.-]*$/gm
    let emailValidator = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/gm
    let usernameValidator = /^[a-zA-Z0-9_-]{5,12}$/
    let passwordValidator = /^[A-Z](?=.*[A-z])(?=.*\d)(?=.*[@!#$%?&*])[A-z\d]{7,}[A-z@!#$%?&*]{2,}$/gm

    if (nameValidator.test(firstLastName.value) === false) {
        result.style.color = "red";
        result.innerHTML = "სახელი და გვარი არასწორ ფორმატშია შეყვანილი!";
        console.log("სახელი და გვარი არასწორ ფორმატშია შეყვანილი!")

    } else {
        if (usernameValidator.test(username.value) === false) {
            result.style.color = "red";
            result.innerHTML = "არასწორია, შეიყვანეთ 5-დან 12 სიმბოლომდე ასო ბგერები და რიცხვები!";
            console.log("არასწორია, შეიყვანეთ 5-დან 12 სიმბოლომდე ასო ბგერები და რიცხვები!")
        } else {
            if (passwordValidator.test(password.value) === false) {
                console.log(passwordValidator.test(password.value), password.value)
                result.style.color = "red";
                result.innerHTML = "პაროლი არასწორ ფორმატშია შეყვანილი!";
                console.log("პაროლი არასწორ ფორმატშია შეყვანილი!")
            } else if (emailValidator.test(email.value) === false) {
                    console.log(emailValidator.test(email.value), email.value)
                    result.style.color = "red";
                    result.innerHTML = "ელ. ფოსტა არასწორ ფორმატშია შეყვანილი!";
                    console.log("ელ. ფოსტა არასწორ ფორმატშია შეყვანილი!")
                }   else {
                        console.log("რეგისტრაცია წარმატებულია!")
                        result.innerHTML = '';
                        let oldUsersData = localStorage.getItem('usersData');
                        oldUsersData = JSON.parse(oldUsersData);            

                        const newUserToken = generateString(36);

                        let newUser = {
                            firstLastName: firstLastName.value,
                            email: email.value,
                            username: username.value,
                            password: password.value,
                            userToken: newUserToken,
                        }

                        if (oldUsersData === null) {
                            localStorage.setItem('usersData', JSON.stringify([newUser]));
                            handleSessionToken(newUserToken);
                            window.location.href = './login.html';
                        } else {
                                for (let user of oldUsersData) {
                                    if (user.username === username.value) {
                                        errorMessage.style.color = "red";
                                        errorMessage.innerHTML = "მომხმარებელი ამ სახელით უკვე არსებობს!"
                                    } else {
                                        oldUsersData.push(newUser);
                                        localStorage.setItem('usersData', JSON.stringify(oldUsersData));
                                        handleSessionToken(newUserToken);
                                        window.location.href = './login.html';
                                    }
                                    break;
                                }
                        }

                    
            }
        }
    }
      


    function handleSessionToken(newUserToken) {
        if (savePassword === true) {
            let timeNow = new Date();

            timeNow.setTime(timeNow.getTime() + (3 * 24 * 60 * 60 * 1000));

            let expires = "expires=" + timeNow.toUTCString();

            document.cookie = `sessionToken=${newUserToken}; ${expires};  path=/`;

        } else {
            localStorage.setItem('sessionToken', newUserToken);
        }
    }
}
