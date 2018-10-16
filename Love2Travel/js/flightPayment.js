var priceLabel = document.getElementById('paymentPrice');
var cardNumber = document.getElementById('inputCardNumber');
var cardPin = document.getElementById('inputCardPin');


var tempPrice = localStorage.getItem("finalFlightPrice");
//alert(tempPrice);


priceLabel.value = tempPrice;

function onValidateDetails() {

var tempCardNumber = cardNumber.value;
var tempCardPin = cardPin.value;
    if (tempCardNumber.length != 10) 
    {
        alert("Card Number Must be 10 digits");
    } else if (tempCardPin.length != 3) 
    {
        alert("Card Pin Must be 3 digits");
    } else {
        window.location.replace('SuccessfulPayment.html');
    }
}


