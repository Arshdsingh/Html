function validateForm() {
    var userNameInput = document.getElementById('userName');
    var passwordInput = document.getElementById('password');

    var tempUserName = localStorage.getItem('LocalUserName');
    var tempPassword = localStorage.getItem('LocalPassword');

    
    var userName = userNameInput.value;
    var password = passwordInput.value;

//alert(tempUserName);
//alert(tempPassword);
//alert(tempUserNameTwo);
//alert(tempPasswordTwo);
    
    localStorage.setItem('welcomeName',userName);
    
    if (userName.length == 0) {
        alert('please enter user name');
       
    } else if (password.length == 0) {
        alert('please enter password');
        
    } else if ((userName == tempUserName) && (password == tempPassword)) {
        window.open('home.html');
        window.close('login.html');
    } else if ((userName == "admin") && (password == "admin")) {
        window.open('admin.html');
        window.close('login.html');
    }
    else {
    alert('UserName/Password Incorrect');
    }
  
}

function onForgotPassword() {
    var resetPasswordValue = document.getElementById('resetpassword');
var labelPasswordChange = document.getElementById('labelPasswordChange');

labelPasswordChange.style.display = "none"

var buttonAdd = document.getElementById("changepasswordbtn")
   buttonAdd.addEventListener("click", onPasswordChange);

   function onPasswordChange() {
      var tempResetPassword = resetPasswordValue.value;
      localStorage.setItem("LocalPassword",tempResetPassword);

      labelPasswordChange.innerText = "Password Changed \n Please Wait Redirecting to LOGIN Page";
      labelPasswordChange.style.display = "block";

      setTimeout(function(){ 
        window.location.replace('login.html'); }, 1000);
   }
}


function onSignUpWindow() {
    window.location.replace('signup.html')
}
function onForgotPasswordWindow() {
    window.location.replace('forgot.html')
}