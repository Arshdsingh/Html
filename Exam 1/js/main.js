function validateForm() {
    var tempUserName = "arsh";
    var tempPassword = "123"

    var userNameInput = document.getElementById('userName');
    var passwordInput = document.getElementById('password');
    
    var userName = userNameInput.value;
    var password = passwordInput.value;

    localStorage.setItem('welcomeName',userName);
    
    if (userName.length == 0) {
        alert('please enter user name');
        return false;
    } else if (password.length == 0) {
        alert('please enter password');
        return false;
    } else if ((userName == tempUserName) && (password == tempPassword)) {
        return true;
    }
    alert('UserName/Password Incorrect')
    return false;
}