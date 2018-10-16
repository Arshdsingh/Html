var username = document.getElementById('idsignUserNameTwo');
var password = document.getElementById('idsignPasswordTwo');
var labelSignUpSuccessful = document.getElementById('SignUpSuccessful');
var labelredirection = document.getElementById('redirection');

labelSignUpSuccessful.style.display = "none";
labelredirection.style.display = "none";

var buttonAdd = document.getElementById("idbtnsignupsubmitTwo")
   buttonAdd.addEventListener("click", onSignUpTwo);

function onSignUpTwo() {
var tempUserName = username.value;
var tempPassword = password.value;

if (tempUserName.length == 0) {
    alert('User Name Compulsary');
} else if (tempPassword.length == 0) {
    alert('Password Compulsary');
}  else {
    localStorage.setItem("LocalUserNameTwo",tempUserName);
    localStorage.setItem("LocalPasswordTwo",tempPassword);

    localStorage.setItem('AccountOneMoney',NaN);

    labelSignUpSuccessful.style.display = "block";
    labelSignUpSuccessful.innerText = "Sign Up Successful";
    labelredirection.style.display = "block";
    window.location.replace('../login.html');
   // window.close('temp/tempS.html');
   /*
    setTimeout(function(){ 
        window.location.replace('../login.html'); }, 1000); 
        */
}
}