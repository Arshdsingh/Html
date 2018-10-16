var flightUserName = document.getElementById('flightUserName');
var fromFlight = document.getElementById('fromTo');
var flightType = document.getElementById('flightType');
var flightPrice = document.getElementById('Price');
var flightTo = document.getElementById('flightTo');
var flightBookeddate = document.getElementById('flightBookeddate');

var reviewUserName = document.getElementById('reviewUserName');
var userReview = document.getElementById('userComments');


var hotelUserName = document.getElementById('hotelUserName');
var hotelType = document.getElementById('hotelType');
var noOfPerson = document.getElementById('noOfPerson');
var hotelPrice = document.getElementById('hotelPrice');

var Checkin = document.getElementById('Checkin');
var Checkout = document.getElementById('Checkout');

var tempflightUserName = localStorage.getItem('LocalUserName');
var tempfrom = localStorage.getItem('flightBookedFrom');
var tempflightType = localStorage.getItem('flightBookedType');
var tempflightPrice = localStorage.getItem('finalFlightPrice');
var tempFlightTo = localStorage.getItem('flightBookedTo');
var tempflightBookeddate = localStorage.getItem('tempflightBookeddate');

var temphotelUserName = localStorage.getItem('LocalUserName');
var temphotelType = localStorage.getItem('hotelBookedType');
var tempnoOfPerson = localStorage.getItem('noOfPeople');
var temphotelPrice = localStorage.getItem('finalHotelPrice');

var tempreviewUserName = localStorage.getItem('LocalUserName');
var tempuserReview = localStorage.getItem('userReview');

var tempcheckindate = localStorage.getItem('checkindate');
var tempcheckoutdate = localStorage.getItem('checkoutdate');

var tempCheckin = localStorage.getItem('checkindate');
var tempCheckout = localStorage.getItem('checkoutdate');


flightUserName.innerText = tempflightUserName;
fromFlight.innerText = tempfrom;
flightType.innerText = tempflightType;
flightPrice.innerText = tempflightPrice;
flightTo.innerText = tempFlightTo;

reviewUserName.innerText = tempreviewUserName;
userReview.innerText = tempuserReview;

hotelUserName.innerText = temphotelUserName;
hotelType.innerText = temphotelType;
noOfPerson.innerText = tempnoOfPerson;
hotelPrice.innerText = temphotelPrice;

Checkin.innerText = tempCheckin;
Checkout.innerText = tempCheckout;

flightBookeddate.innerText = tempflightBookeddate;


function onLogout() {
    window.location.replace('login.html');
}