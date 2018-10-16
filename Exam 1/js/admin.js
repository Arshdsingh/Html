//source
var selecteduserText = document.getElementById('selectedUser');
var selectedInitialBalanceText = document.getElementById('selectedInitialBalance');
var selectedActualBalanceText = document.getElementById('selectedActualBalance');


//destination
var targetUserText = document.getElementById('targetUser');
var targetInitialBalanceText = document.getElementById('targetInitialBalance');
var targetActualBalanceText = document.getElementById('targetActualBalance');


setAllValues();

function setAllValues() {
    var tempActualBalance = localStorage.getItem('fb'); 
    var tempOtherBalance = localStorage.getItem('ob');
    var tempOtherAccountNumber = localStorage.getItem('ocv');
    var tempInitialBalance = localStorage.getItem('tfib');
    var tempTagertBalance = localStorage.getItem('ttob');
    
    selecteduserText.innerText = "0987654321";
    selectedActualBalanceText.innerText = tempActualBalance;
    selectedInitialBalanceText.innerText = tempInitialBalance;

    targetUserText.innerText = tempOtherAccountNumber;
    targetActualBalanceText.innerText = tempOtherBalance;
    targetInitialBalanceText.innerText = tempTagertBalance;
}