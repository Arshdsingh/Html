var username = document.getElementById('idsignUserName');
var password = document.getElementById('idsignPassword');
var email = document.getElementById('idsignEmail');
var labelSignUpSuccessful = document.getElementById('SignUpSuccessful');
var labelredirection = document.getElementById('redirection');


labelSignUpSuccessful.style.display = "none";
labelredirection.style.display = "none";

var buttonAdd = document.getElementById("idbtnsignupsubmit")
   buttonAdd.addEventListener("click", onSignUp);

function onSignUp() {
var tempUserName = username.value;
var tempEmail = email.value;
var tempPassword = password.value;

if (tempUserName.length == 0) {
    alert('User Name Compulsary');
} else if (tempEmail.length == 0) {
    alert('Email Compulsary');
} else if (tempPassword.length == 0) {
    alert('Password Compulsary');
} 
 else {
    localStorage.setItem("LocalUserName",tempUserName);
    localStorage.setItem("LocalPassword",tempPassword);
    localStorage.setItem("LocalEmail",tempEmail);

    labelSignUpSuccessful.style.display = "block";
    labelSignUpSuccessful.innerText = "Sign Up Successful";
    labelredirection.style.display = "block";
    setTimeout(function(){ 
        window.location.replace('login.html'); }, 1000);
}
}