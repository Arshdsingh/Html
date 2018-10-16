var tempKeywordSaving = "savings";
var tempKeywordChecking = "checking";
var tempKeywordOther = "other"

//localStorage.setItem('AccountOneMoney',1000);
var accountOneMoney = parseInt(localStorage.getItem('AccountOneMoney'));
//localStorage.removeItem('AccountOneMoney');
alert(accountOneMoney)
if (isNaN(accountOneMoney)) {
    accountOneMoney = 0;
}

var checkingBalance = 1000 + accountOneMoney;
var savingBalance = 1000;
var finalBalance = checkingBalance;
//var currentBalance = 2000;
var currentBalance = checkingBalance+accountOneMoney;

alert(currentBalance);

var currentCreditBalance = 1000;
var availableCredit = 0;

 var otherAccoutBalance = 0;

var currentBalanceInput = document.getElementById('currentBalance');
var amountInput = document.getElementById('amount');
var finalBalanceInput = document.getElementById('finalBalance');

var labelAccountNumber = document.getElementById('labelmessage');
var accountNumberInput = document.getElementById('otheraccount');

var labelMoneyTransferMessage = document.getElementById('moneyTransferMessage');
var otherAccountNumber = document.getElementById('otheraccount');

var totalCreditText = document.getElementById('totalCredit');
var availableCreditText = document.getElementById('availableCredit');

//var savingsMoneyBalanceLabel = document.getElementById('savingMoney');
var creditAccountBalanceLabel = document.getElementById('creditMoney'); 
var welcomeLabel = document.getElementById('welcome_name');

welcomeLabel.innerText = localStorage.getItem('welcomeName');



setSavingAccountBalance();
setTotalCreditText();
//setCurrentBalance();
setCreditBalance();
setFinalBalance();
setCheckingBalance();

// LocalSetCurrentBalance();
// LocalSetCreditBalance();
// LocalSetFinalBalance();
// LocalSetCheckingBalance();

//setSavingsLabel();
setCreditLabel();

document.getElementById("totalCredit").style.backgroundColor = "red";
document.getElementById("totalCredit").style.fontWeight = "bold";
document.getElementById("totalCredit").style.fontSize = "20px";

document.getElementById("fromselect").style.backgroundColor = "yellow";
document.getElementById("toselect").style.backgroundColor = "yellow";

document.getElementById("currentBalance").style.backgroundColor = "green";
document.getElementById("currentBalance").style.fontWeight = "bold";
document.getElementById("currentBalance").style.fontSize = "20px";
document.getElementById("finalBalance").style.backgroundColor = "red";



var buttonAdd = document.getElementById("calculate")
buttonAdd.addEventListener("click", methodTransfer);
function methodTransfer() {

    var fromAccount = document.getElementById("fromselect").value;
    var toAccount = document.getElementById("toselect").value;
    var tempAmount = parseInt(amountInput.value); 

if ((fromAccount.match("saving")) && (toAccount.match("checking"))) {

    //amountInput.value = "";

    labelAccountNumber.style.display = "none";
    accountNumberInput.style.display = "none";

    var totalCurrentValue = savingBalance + currentCreditBalance;
    var subtractedmoney;
    if (totalCurrentValue == 0) {
        alert('Balance Is Zero\nFirst Add Money Into Your Saving Account....')
    } else if (totalCurrentValue < tempAmount) {
        alert('InSufficient Balance\nPlease Enter Amount Again!!');
    } else {
    console.log('s->c');
    console.log("From : "+fromAccount);
    console.log("To : "+toAccount);

    if (tempAmount > savingBalance) {
        subtractedmoney = tempAmount - savingBalance;
        otherAccoutBalance+=tempAmount;
        alert(subtractedmoney);
        savingBalance =  0;
        setSavingsLabel();
        currentCreditBalance-=subtractedmoney;
        alert(currentBalance);
        setTotalCreditText();
    }
     else {   
    checkingBalance+=tempAmount;
    savingBalance-=tempAmount;

    console.log("Checking : "+checkingBalance);
    console.log("Saving : "+savingBalance);
    
    //currentBalance-=tempAmount;
    
    setSavingAccountBalance();

    //setCurrentBalance();
    setFinalBalance();
    //setCheckingBalance();

    //LocalSetCurrentBalance();
    //LocalSetCreditBalance();
    //LocalSetFinalBalance();
    //LocalSetCheckingBalance();

    //setSavingsLabel();
    setCreditLabel();
    setTotalCreditText();
     }
    }

    if (currentBalance <=400) {
        document.getElementById("currentBalance").style.backgroundColor = "red";
    }
} else if ((fromAccount.match("checking")) && (toAccount.match("saving"))) {

    //amountInput.value = "";

    labelAccountNumber.style.display = "none";
    accountNumberInput.style.display = "none";

    console.log('c->s')
    if (checkingBalance == 0) {
        alert('Balance Is Zero\nFirst Add Money Into Your Checking Account....')
    } else if (checkingBalance < tempAmount) {
        alert('InSufficient Balance\nPlease Enter Amount Again!!');
    }
    else {
    console.log("From : "+fromAccount)
    console.log("To : "+toAccount)
    savingBalance+=tempAmount;
    checkingBalance-=tempAmount;

    //currentBalance-=tempAmount;

    console.log("Checking : "+checkingBalance);
    console.log("Saving : "+savingBalance);

    //availableCredit = creditTotal - amountInput.value;


    

   //setCreditBalance();
   setCurrentBalance();
   setFinalBalance();
   //setCheckingBalance();

    //LocalSetCurrentBalance();
    //LocalSetCreditBalance();
    //LocalSetFinalBalance();
    //LocalSetCheckingBalance();

    //setSavingsLabel();
    setCreditLabel();
    setTotalCreditText();

    }
    if (currentBalance <=400) {
        document.getElementById("currentBalance").style.backgroundColor = "red";
    }

} else if ((fromAccount.match("saving")) && (toAccount.match("other"))) {

    //amountInput.value = "";

    //labelAccountNumber.style.display = "block";
    //accountNumberInput.style.display = "block";

    var tempAccount = otheraccount.value;
    
    var totalCurrentValue = savingBalance + currentCreditBalance;
    var subtractedmoney;

    console.log('s->o')
    if (totalCurrentValue == 0) {
        alert('Balance Is Zero\nFirst Add Money Into Your Saving Account....')
    } else if (totalCurrentValue < tempAmount) {
        alert('InSufficient Balance\nPlease Enter Amount Again!!');
    } else if (tempAccount.length != 10) {
        alert('Account No. Must be of 10 digits....')
    }
    else {
    console.log("From : "+fromAccount)
    console.log("To : "+toAccount)

    if (tempAmount > savingBalance) {
        subtractedmoney = tempAmount - savingBalance;
        otherAccoutBalance+=tempAmount;
        
        savingBalance =  0;
        setSavingsLabel();
        currentCreditBalance-=subtractedmoney;
        
        setTotalCreditText();
    }
     else {
    otherAccoutBalance+=tempAmount;
    savingBalance-=tempAmount;

    currentBalance-=tempAmount;

    console.log("Saving : "+savingBalance);
    console.log("Other : "+otherAccoutBalance);

   setCurrentBalance();
   setFinalBalance();
   //setCheckingBalance();

    //LocalSetCurrentBalance();
    //LocalSetCreditBalance();
    LocalSetFinalBalance();
    LocalSetOtherBalance();
    LocalSetFOtherAccountValue();
    //LocalSetCheckingBalance();

    //setSavingsLabel();
    setCreditLabel();
    setTotalCreditText();

    var subStringAccount = tempAccount.substr(0,5)+"*****";

    
    document.getElementById('moneyTransferMessage').innerText = 'Money Transfered to Account No : '+subStringAccount;
    labelMoneyTransferMessage.style.display = "block";

    fromInitialBalance();
    toInitialBalance();
    }
}
    if (currentBalance <=400) {
        document.getElementById("currentBalance").style.backgroundColor = "red";
    }
} else if ((fromAccount.match("checking")) && (toAccount.match("other"))) {

    //amountInput.value = "";

    

    //labelAccountNumber.style.display = "block";
    //accountNumberInput.style.display = "block";

    var tempAccount = otheraccount.value;

    var totalCurrentValue = checkingBalance + currentCreditBalance;
    var subtractedmoney;

    console.log('c->0')
    if (totalCurrentValue == 0) {
        alert('Balance Is Zero\nFirst Add Money Into Your Checking Account....')
    } else if (totalCurrentValue < tempAmount) {
        alert('InSufficient Balance\nPlease Enter Amount Again!!');
    }
    else {
    console.log("From : "+fromAccount)
    console.log("To : "+toAccount)


    if (tempAmount > checkingBalance) {
        subtractedmoney = tempAmount - checkingBalance;
        otherAccoutBalance+=tempAmount;
        
        checkingBalance =  0;
        setCreditLabel();
        currentCreditBalance-=subtractedmoney;

        localStorage.setItem('AccountTwoMoney',otherAccoutBalance);

        console.log(otherAccoutBalance);
        
        setTotalCreditText();
        setCurrentBalance();
        addDataToTable();
        setFinalBalance();
    }
     else {
    otherAccoutBalance+=tempAmount;
    checkingBalance-=tempAmount;

    localStorage.setItem('AccountTwoMoney',otherAccoutBalance);

    console.log(otherAccoutBalance);

    currentBalance-=tempAmount;

    console.log("Checking : "+checkingBalance);
    console.log("Other : "+otherAccoutBalance);

    

   setCurrentBalance();
    setFinalBalance();
   // setCheckingBalance();

   // LocalSetCurrentBalance();
   // LocalSetCreditBalance();
   // LocalSetFinalBalance();
   // LocalSetCheckingBalance();

    //setSavingsLabel();
    setCreditLabel();
    setTotalCreditText();
    addDataToTable();
    addDataToTableIn();

    var subStringAccount = tempAccount.substr(0,5)+"****";
    
    document.getElementById('moneyTransferMessage').innerText = 'Money Transfered to Account No : '+subStringAccount;
    labelMoneyTransferMessage.style.display = "block";

    fromInitialBalance();
    toInitialBalance();
     }
    }
    if (currentBalance <=400) {
        document.getElementById("currentBalance").style.backgroundColor = "red";
    }
}
}

function setCurrentBalance() {
//alert("setCurrentBalance()");
currentBalanceInput.value = checkingBalance;
//currentBalanceInput.value = currentBalance;
// localStorage.setItem('cb',currentBalance);
}
function setCreditBalance() {
//alert("setCreditBalance()");
totalCreditText.value = currentCreditBalance;
// localStorage.setItem('crb',currentCreditBalance);
}
function setFinalBalance() {
// alert("setFinalBalance()");
finalBalanceInput.value = checkingBalance;
//localStorage.setItem('fb',currentBalance);
}

function setCheckingBalance() {
//alert("setCheckingBalance()");
//availableCreditText.value = checkingBalance;
//localStorage.setItem('chkb',checkingBalance);
//  alert(availableCreditText.value);
}

function setSavingsLabel() {
// savingsMoneyBalanceLabel.innerText = savingBalance;
}
function setCreditLabel() {
 creditAccountBalanceLabel.innerText = checkingBalance;
}


function setTotalCreditText() {
totalCreditText.value = currentCreditBalance;
availableCreditText.value = currentCreditBalance;
}



function LocalSetCurrentBalance() {
 //currentBalanceInput.value = currentBalance;
 localStorage.setItem('cb',currentBalance);
 
 
 var temp = localStorage.getItem('cb');
 currentBalanceInput.value = temp;
 alert("LocalSetCurrentBalance()"+localStorage.getItem('cb'));

}
function LocalSetCreditBalance() {
 //totalCreditText.value = currentCreditBalance;
 localStorage.setItem('crb',currentCreditBalance);
 
 
 var temp = localStorage.getItem('crb');
 totalCreditText.value = temp;
 alert("LocalSetCreditBalance()"+localStorage.getItem('crb'));
}
function LocalSetFinalBalance() {
 //finalBalanceInput.value = currentBalance;
 localStorage.setItem('fb',currentBalance);
 
 
 //var temp = localStorage.getItem('fb');
 //finalBalanceInput.value = temp;
 //alert("LocalSetFinalBalance()"+localStorage.getItem('fb'));
}


function LocalSetFOtherAccountValue() {
//finalBalanceInput.value = currentBalance;
localStorage.setItem('ocv',otheraccount.value);


//var temp = localStorage.getItem('fb');
//finalBalanceInput.value = temp;
//alert("LocalSetFinalBalance()"+localStorage.getItem('fb'));
}

function LocalSetOtherBalance() {
//finalBalanceInput.value = currentBalance;
localStorage.setItem('ob',otherAccoutBalance);


//var temp = localStorage.getItem('fb');
//finalBalanceInput.value = temp;
//alert("LocalSetFinalBalance()"+localStorage.getItem('fb'));
}
function LocalSetCheckingBalance() {
 //availableCreditText.value = checkingBalance;
 localStorage.setItem('chkb',checkingBalance);
 
 
 var temp = localStorage.getItem('chkb');
 availableCreditText.value = temp;
 alert("LocalSetCheckingBalance()"+localStorage.getItem('chkb'));
}

function openAdminPanel() {
 window.open("admin.html")
}


function fromInitialBalance() {
var tempfromInitialBalance =  currentBalance;
var tempamount = amountInput;
var cal = tempamount + tempamount;
tempfromInitialBalance+=cal;

localStorage.setItem('tfib',tempfromInitialBalance);
}
function toInitialBalance() {
var tempOtherBalance =  otherAccoutBalance;
var tempamount = amountInput;
var cal = tempamount + tempamount;
tempOtherBalance+=cal;

localStorage.setItem('ttob',tempOtherBalance);
}

function setSavingAccountBalance() {
currentBalanceInput.value = savingBalance;
}

function setCheckingAccountBalance() {
currentBalanceInput.value = checkingBalance;
}


function onLogout() {
window.location.replace('../login.html');
}

function addDataToTable() {

    event.preventDefault();

     var accountTr = document.createElement("tr");
     var dateTd    = document.createElement("td");
     var outTd  = document.createElement("td");
     var inTd  = document.createElement("td");
     var balanceTd     = document.createElement("td");

     alert('tr,td created');

     var date = new Date();

     alert(date);

     dateTd.textContent   = date;
     outTd.textContent = amountInput.value;
     inTd.textContent = "";
     balanceTd.textContent    = checkingBalance;

     accountTr.appendChild(dateTd);
     accountTr.appendChild(outTd);
     accountTr.appendChild(inTd);
     accountTr.appendChild(balanceTd);

     var table = document.getElementById('tableAccounts');

     table.appendChild(accountTr);
}
function onOptionChange() {
var x = document.getElementById("toselect").value;
var y = document.getElementById("fromselect").value;


if (x.match("other")) {
    labelAccountNumber.style.display = "block";
    accountNumberInput.style.display = "block";
} 
else {
    otherAccountNumber.value = "";
    labelAccountNumber.style.display = "none";
    accountNumberInput.style.display = "none";
}


}


