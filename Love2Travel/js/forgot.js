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