var priceLabel = document.getElementById('priceLabel');
var Image = document.getElementById('flightTypeImage');

var checkindate = document.getElementById('checkindate');
var checkoutdate = document.getElementById('checkoutdate');


var featuresStandard = document.getElementById('featuresStandard');
var featuresDelux = document.getElementById('featuresDelux');
var featuresSuperDeluxe = document.getElementById('featuresSuperDeluxe');

var FinalPrice = 0;

var hotelBooked = "";
var hotelBookedPerson = 0;



priceLabel.innerText = 100;

featuresStandard.style.display = "block";
featuresDelux.style.display = "none";
featuresSuperDeluxe.style.display = "none";

function onHotelChange() {
    var x = document.getElementById("HotelTypeSelect").value;

    if (x.match("Standard")) {
        priceLabel.innerText = 100;  
        FinalPrice = 100;     
        localStorage.setItem('finalHotelPrice',FinalPrice);
        Image.src = "img/standardroom.jpg"
        featuresStandard.style.display = "block";
        featuresDelux.style.display = "none";
        featuresSuperDeluxe.style.display = "none";
    } else if (x.match("Delux")) {
        priceLabel.innerText = 300;  
        FinalPrice = 300;     
        localStorage.setItem('finalHotelPrice',FinalPrice);
        Image.src = "img/Deluxeroom.jpg"
        featuresStandard.style.display = "none";
        featuresDelux.style.display = "block";
        featuresSuperDeluxe.style.display = "none";
    }
    else if (x.match("Super")) {
        priceLabel.innerText = 1000;  
        FinalPrice = 1000;     
        localStorage.setItem('finalHotelPrice',FinalPrice);
        Image.src = "img/superdeluxe.jpg"
        featuresStandard.style.display = "none";
        featuresDelux.style.display = "none";
        featuresSuperDeluxe.style.display = "block";
    }
}

function onFlightBook() {
    var tempcheckindate = checkindate.value;
    var tempcheckoutdate = checkoutdate.value;

    alert(tempcheckindate);
    alert(tempcheckoutdate);
    localStorage.setItem('finalHotelPrice',FinalPrice);
    localStorage.setItem("hotelBookedType",hotelBooked);
    localStorage.setItem("noOfPeople",hotelBookedPerson);
    localStorage.setItem("checkindate",tempcheckindate);
    localStorage.setItem("checkoutdate",tempcheckoutdate);
    //alert(FinalPrice);
    //alert(hotelBooked);
    //alert(hotelBookedPerson);
    window.location.replace('hotelPayment.html');

}

function onNoOfPersonChange() {
    var x = document.getElementById("HotelTypeSelect").value;
    var y = document.getElementById("noOfPersonSelect").value;

    //alert(x);
    //alert(y);
    //alert(z);

    if (x.match("Standard") && (y.match("1"))) {
        priceLabel.innerText = 100;  
        FinalPrice = 100;     
        localStorage.setItem('finalHotelPrice',FinalPrice);

        hotelBooked = "Standard";
        hotelBookedPerson = 1;
        
    } else if (x.match("Standard") && (y.match("2"))) {
        priceLabel.innerText = 120;  
        FinalPrice = 120;   
        localStorage.setItem('finalHotelPrice',FinalPrice);  

        hotelBooked = "Standard";
        hotelBookedPerson = 2; 

    } else if (x.match("Standard") && (y.match("3"))) {
        priceLabel.innerText = 140;  
        FinalPrice = 140;       
        localStorage.setItem('finalHotelPrice',FinalPrice);

        hotelBooked = "Standard";
        hotelBookedPerson = 3;

    } else if (x.match("Standard") && (y.match("4"))) {
        priceLabel.innerText = 160;   
        FinalPrice = 160;  
        localStorage.setItem('finalHotelPrice',FinalPrice);

        hotelBooked = "Standard";
        hotelBookedPerson = 4;

    } else if (x.match("Standard") && (y.match("5") )) {
        priceLabel.innerText = 180;   
        FinalPrice = 180;  
        localStorage.setItem('finalHotelPrice',FinalPrice);

        hotelBooked = "Standard";
        hotelBookedPerson = 5;

    }




     else if (x.match("Delux")&& (y.match("1") )) {
        priceLabel.innerText = 300;  
        FinalPrice = 300;   
        localStorage.setItem('finalHotelPrice',FinalPrice);

        hotelBooked = "Delux";
        hotelBookedPerson = 1;

    } else if (x.match("Delux")&& (y.match("2") )) {
        priceLabel.innerText = 320; 
        FinalPrice = 320;   
        localStorage.setItem('finalHotelPrice',FinalPrice);

        hotelBooked = "Delux";
        hotelBookedPerson = 2;

    } else if (x.match("Delux")&& (y.match("3") )) {
        priceLabel.innerText = 340;
        FinalPrice = 340;  
        localStorage.setItem('finalHotelPrice',FinalPrice);

        hotelBooked = "Delux";
        hotelBookedPerson = 3;

    } else if (x.match("Delux")&& (y.match("4") )) {
        priceLabel.innerText = 360;  
        FinalPrice = 360;  
        localStorage.setItem('finalHotelPrice',FinalPrice);

        hotelBooked = "Delux";
        hotelBookedPerson = 4;

    } else if (x.match("Delux")&& (y.match("5") )) {
        priceLabel.innerText = 380;  
        FinalPrice = 380;  
        localStorage.setItem('finalHotelPrice',FinalPrice);

        hotelBooked = "Delux";
        hotelBookedPerson = 5;

    }



    else if (x.match("Super")&& (y.match("1") )) {
        priceLabel.innerText = 1000;  
        FinalPrice = 1000;    
        localStorage.setItem('finalHotelPrice',FinalPrice);

        hotelBooked = "Super";
        hotelBookedPerson = 1;

    } else if (x.match("Super")&& (y.match("2") )) {
        priceLabel.innerText = 1200;  
        FinalPrice = 1200;    
        localStorage.setItem('finalHotelPrice',FinalPrice);

        hotelBooked = "Super";
        hotelBookedPerson = 2;

    } else if (x.match("Super")&& (y.match("3") )) {
        priceLabel.innerText = 1400; 
        FinalPrice = 1400; 
        localStorage.setItem('finalHotelPrice',FinalPrice); 
        
        hotelBooked = "Super";
        hotelBookedPerson = 3;
        
    } else if (x.match("Super")&& (y.match("4") )) {
        priceLabel.innerText = 1600;  
        FinalPrice = 1600;    
        localStorage.setItem('finalHotelPrice',FinalPrice);

        hotelBooked = "Super";
        hotelBookedPerson = 4;

    } else if (x.match("Super")&& (y.match("5") )) {
        priceLabel.innerText = 1800;  
        FinalPrice = 1800;    
        localStorage.setItem('finalHotelPrice',FinalPrice);

        hotelBooked = "Super";
        hotelBookedPerson = 5;

    }
}