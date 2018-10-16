function validateForm() {
    var userNameInput = document.getElementById('userName');
    var passwordInput = document.getElementById('password');

    var tempUserName = localStorage.getItem('LocalUserName');
    var tempPassword = localStorage.getItem('LocalPassword');

    var tempUserNameTwo = localStorage.getItem('LocalUserNameTwo');
    var tempPasswordTwo = localStorage.getItem('LocalPasswordTwo');
    
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
        window.open('User.html');
        window.close('login.html');
    } 
    else if ((userName == tempUserNameTwo) && (password == tempPasswordTwo)) {
        window.open('temp/tempU.html');
        window.close('login.html');
    } 
    else {
    alert('UserName/Password Incorrect');
    }
  
}

function onSignUpWindow() {
    window.location.replace('signup.html')
}
function onForgotPasswordWindow() {
    window.location.replace('forgot.html')
}