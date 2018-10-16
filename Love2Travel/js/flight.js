var priceLabel = document.getElementById('priceLabel');
var Image = document.getElementById('flightTypeImage');


var flightBookeddate = document.getElementById('flightBookeddate');

var FinalPrice = 0;

var flightBookedFrom = "";
var flightBookedTo = "";
var flightBookedType = "";


priceLabel.innerText = 1300;
function onFlightChange() {
    var x = document.getElementById("flightTypeSelect").value;

    if (x.match("Economy")) {
        priceLabel.innerText = 1300;  
        FinalPrice = 1300;     
        localStorage.setItem('finalFlightPrice',FinalPrice);
        Image.src = "img/economic.jpg"
    } else if (x.match("Buisness")) {
        priceLabel.innerText = 5000;  
        FinalPrice = 5000;     
        localStorage.setItem('finalFlightPrice',FinalPrice);
        Image.src = "img/buisness.jpg"
    }
}

function onFlightBook() {
    var tempflightBookeddate = flightBookeddate.value;
    localStorage.setItem('finalFlightPrice',FinalPrice);
    localStorage.setItem('flightBookedFrom',flightBookedFrom);
    localStorage.setItem('flightBookedTo',flightBookedTo);
    localStorage.setItem('flightBookedType',flightBookedType);
    localStorage.setItem('tempflightBookeddate',tempflightBookeddate);
    //alert(flightBookedFrom);
    //alert(flightBookedTo);
    //alert(flightBookedType);
    window.location.replace('flightpayment.html');
}

function onFlightFromChange() {
    var x = document.getElementById("flightFromSelect").value;
    var y = document.getElementById("flightToSelect").value;
    var z = document.getElementById("flightTypeSelect").value;
    //alert(x);
    //alert(y);
    //alert(z);

    if (x.match("Belgium") && (y.match("Egypt") && (z.match("Economy")))) {
        priceLabel.innerText = 1300;  
        FinalPrice = 1300;     
        localStorage.setItem('finalFlightPrice',FinalPrice);

        flightBookedFrom = "Belgium";
        flightBookedTo = "Egypt";
        flightBookedType = "Economy";

    } else if (x.match("Belgium") && (y.match("Finland") && (z.match("Economy")))) {
        priceLabel.innerText = 1350;  
        FinalPrice = 1350;   
        localStorage.setItem('finalFlightPrice',FinalPrice);  
        
        flightBookedFrom = "Belgium";
        flightBookedTo = "Finland";
        flightBookedType = "Economy";
        
    } else if (x.match("Belgium") && (y.match("Greece") && (z.match("Economy")))) {
        priceLabel.innerText = 1400;  
        FinalPrice = 1400;       
        localStorage.setItem('finalFlightPrice',FinalPrice);

        flightBookedFrom = "Belgium";
        flightBookedTo = "Greece";
        flightBookedType = "Economy";

    } else if (x.match("Belgium") && (y.match("India") && (z.match("Economy")))) {
        priceLabel.innerText = 1450;   
        FinalPrice = 1450;  
        localStorage.setItem('finalFlightPrice',FinalPrice);

        flightBookedFrom = "Belgium";
        flightBookedTo = "India";
        flightBookedType = "Economy";

    }


     else if (x.match("Canada")&& (y.match("Egypt") && (z.match("Economy")))) {
        priceLabel.innerText = 1500;  
        FinalPrice = 1500;   
        localStorage.setItem('finalFlightPrice',FinalPrice);

        flightBookedFrom = "Canada";
        flightBookedTo = "Egypt";
        flightBookedType = "Economy";

    } else if (x.match("Canada")&& (y.match("Finland") && (z.match("Economy")))) {
        priceLabel.innerText = 1550; 
        FinalPrice = 1550;   
        localStorage.setItem('finalFlightPrice',FinalPrice);

        flightBookedFrom = "Canada";
        flightBookedTo = "Finland";
        flightBookedType = "Economy";

    } else if (x.match("Canada")&& (y.match("Greece") && (z.match("Economy")))) {
        priceLabel.innerText = 1600;
        FinalPrice = 1600;  
        localStorage.setItem('finalFlightPrice',FinalPrice);

        flightBookedFrom = "Canada";
        flightBookedTo = "Greece";
        flightBookedType = "Economy";

    } else if (x.match("Canada")&& (y.match("India") && (z.match("Economy")))) {
        priceLabel.innerText = 1650;  
        FinalPrice = 1650;  
        localStorage.setItem('finalFlightPrice',FinalPrice);

        flightBookedFrom = "Canada";
        flightBookedTo = "India";
        flightBookedType = "Economy";

    }


    else if (x.match("USA")&& (y.match("Egypt") && (z.match("Economy")))) {
        priceLabel.innerText = 1700;  
        FinalPrice = 1700;    
        localStorage.setItem('finalFlightPrice',FinalPrice);

        flightBookedFrom = "USA";
        flightBookedTo = "Egypt";
        flightBookedType = "Economy";

    } else if (x.match("USA")&& (y.match("Finland") && (z.match("Economy")))) {
        priceLabel.innerText = 1750;  
        FinalPrice = 1750;    
        localStorage.setItem('finalFlightPrice',FinalPrice);

        flightBookedFrom = "USA";
        flightBookedTo = "Finland";
        flightBookedType = "Economy";

    } else if (x.match("USA")&& (y.match("Greece") && (z.match("Economy")))) {
        priceLabel.innerText = 1800; 
        FinalPrice = 1800; 
        localStorage.setItem('finalFlightPrice',FinalPrice);    

        flightBookedFrom = "USA";
        flightBookedTo = "Greece";
        flightBookedType = "Economy";

    } else if (x.match("USA")&& (y.match("India") && (z.match("Economy")))) {
        priceLabel.innerText = 1850;  
        FinalPrice = 1850;    
        localStorage.setItem('finalFlightPrice',FinalPrice);

        flightBookedFrom = "USA";
        flightBookedTo = "India";
        flightBookedType = "Economy";

    }


    else if (x.match("Czech")&& (y.match("Egypt")&& (z.match("Economy")))) {
        priceLabel.innerText = 1900; 
        FinalPrice = 1900; 
        localStorage.setItem('finalFlightPrice',FinalPrice);

        flightBookedFrom = "Czech";
        flightBookedTo = "Egypt";
        flightBookedType = "Economy";

    } else if (x.match("Czech")&& (y.match("Finland")&& (z.match("Economy")))) {
        priceLabel.innerText = 1950; 
        FinalPrice = 1950; 
        localStorage.setItem('finalFlightPrice',FinalPrice);

        flightBookedFrom = "Czech";
        flightBookedTo = "Finland";
        flightBookedType = "Economy";

    } else if (x.match("Czech")&& (y.match("Greece")&& (z.match("Economy")))) {
        priceLabel.innerText = 2000;
        FinalPrice = 2000;  
        localStorage.setItem('finalFlightPrice',FinalPrice);

        flightBookedFrom = "Czech";
        flightBookedTo = "Greece";
        flightBookedType = "Economy";

    }else if (x.match("Czech")&& (y.match("India")&& (z.match("Economy")))) {
        priceLabel.innerText = 2050; 
        FinalPrice = 2050;
        localStorage.setItem('finalFlightPrice',FinalPrice); 

        flightBookedFrom = "Czech";
        flightBookedTo = "India";
        flightBookedType = "Economy";

    }


    if (x.match("Belgium") && (y.match("Egypt") && (z.match("Buisness")))) {
        priceLabel.innerText = 5000;   
        FinalPrice = 5000;   
        localStorage.setItem('finalFlightPrice',FinalPrice);  

        flightBookedFrom = "Belgium";
        flightBookedTo = "Egypt";
        flightBookedType = "Buisness";

    } else if (x.match("Belgium") && (y.match("Finland") && (z.match("Buisness")))) {
        priceLabel.innerText = 5050;  
        FinalPrice = 5050;   
        localStorage.setItem('finalFlightPrice',FinalPrice);  
        
        flightBookedFrom = "Belgium";
        flightBookedTo = "Finland";
        flightBookedType = "Buisness";
        
    } else if (x.match("Belgium") && (y.match("Greece") && (z.match("Buisness")))) {
        priceLabel.innerText = 6000;  
        FinalPrice = 6000;   
        localStorage.setItem('finalFlightPrice',FinalPrice);
        
        flightBookedFrom = "Belgium";
        flightBookedTo = "Greece";
        flightBookedType = "Buisness";
        
    } else if (x.match("Belgium") && (y.match("India") && (z.match("Buisness")))) {
        priceLabel.innerText = 6050; 
        FinalPrice = 6050;  
        localStorage.setItem('finalFlightPrice',FinalPrice); 

        flightBookedFrom = "Belgium";
        flightBookedTo = "India";
        flightBookedType = "Buisness";
    }


     else if (x.match("Canada")&& (y.match("Egypt") && (z.match("Buisness")))) {
        priceLabel.innerText = 6100;   
        FinalPrice = 6100; 
        localStorage.setItem('finalFlightPrice',FinalPrice);

        flightBookedFrom = "Canada";
        flightBookedTo = "Egypt";
        flightBookedType = "Buisness";

    } else if (x.match("Canada")&& (y.match("Finland") && (z.match("Buisness")))) {
        priceLabel.innerText = 6150; 
        FinalPrice = 6150;  
        localStorage.setItem('finalFlightPrice',FinalPrice);

        flightBookedFrom = "Canada";
        flightBookedTo = "Finland";
        flightBookedType = "Buisness";

    } else if (x.match("Canada")&& (y.match("Greece") && (z.match("Buisness")))) {
        priceLabel.innerText = 7000;
        FinalPrice = 7000; 
        localStorage.setItem('finalFlightPrice',FinalPrice);

        flightBookedFrom = "Canada";
        flightBookedTo = "Greece";
        flightBookedType = "Buisness";

    } else if (x.match("Canada")&& (y.match("India") && (z.match("Buisness")))) {
        priceLabel.innerText = 7050;  
        FinalPrice = 7050; 
        localStorage.setItem('finalFlightPrice',FinalPrice);

        flightBookedFrom = "Canada";
        flightBookedTo = "India";
        flightBookedType = "Buisness";

    }


    else if (x.match("USA")&& (y.match("Egypt") && (z.match("Buisness")))) {
        priceLabel.innerText = 8000; 
        FinalPrice = 8000;   
        localStorage.setItem('finalFlightPrice',FinalPrice);  

        flightBookedFrom = "USA";
        flightBookedTo = "Egypt";
        flightBookedType = "Buisness";

    } else if (x.match("USA")&& (y.match("Finland") && (z.match("Buisness")))) {
        priceLabel.innerText = 8050;    
        FinalPrice = 8050;  
        localStorage.setItem('finalFlightPrice',FinalPrice);

        flightBookedFrom = "USA";
        flightBookedTo = "Egypt";
        flightBookedType = "Buisness";

    } else if (x.match("USA")&& (y.match("Greece") && (z.match("Buisness")))) {
        priceLabel.innerText = 8100; 
        FinalPrice = 8100;    
        localStorage.setItem('finalFlightPrice',FinalPrice); 

        flightBookedFrom = "USA";
        flightBookedTo = "Greece";
        flightBookedType = "Buisness";

    } else if (x.match("USA")&& (y.match("India") && (z.match("Buisness")))) {
        priceLabel.innerText = 8150;  
        FinalPrice = 8150;   
        localStorage.setItem('finalFlightPrice',FinalPrice); 

        flightBookedFrom = "USA";
        flightBookedTo = "India";
        flightBookedType = "Buisness";

    }


    else if (x.match("Czech")&& (y.match("Egypt")&& (z.match("Buisness")))) {
        priceLabel.innerText = 9000; 
        FinalPrice = 9000; 
        localStorage.setItem('finalFlightPrice',FinalPrice);

        flightBookedFrom = "Czech";
        flightBookedTo = "Egypt";
        flightBookedType = "Buisness";

    } else if (x.match("Czech")&& (y.match("Finland")&& (z.match("Buisness")))) {
        priceLabel.innerText = 9050; 
        FinalPrice = 9050; 
        localStorage.setItem('finalFlightPrice',FinalPrice);

        flightBookedFrom = "Czech";
        flightBookedTo = "Finland";
        flightBookedType = "Buisness";

    } else if (x.match("Czech")&& (y.match("Greece")&& (z.match("Buisness")))) {
        priceLabel.innerText = 9100; 
        FinalPrice = 9100; 
        localStorage.setItem('finalFlightPrice',FinalPrice);

        flightBookedFrom = "Czech";
        flightBookedTo = "Greece";
        flightBookedType = "Buisness";

    }else if (x.match("Czech")&& (y.match("India")&& (z.match("Buisness")))) {
        priceLabel.innerText = 9150; 
        FinalPrice = 9150; 
        localStorage.setItem('finalFlightPrice',FinalPrice);

        flightBookedFrom = "Czech";
        flightBookedTo = "India";
        flightBookedType = "Buisness";

    }

}

function onFlighToChange() {
    var x = document.getElementById("flightToSelect").value;
    var y = document.getElementById("flightFromSelect").value;
    

    if (x.match("Belgium") && (y.match("Egypt") && (z.match("Economy")))) {
        priceLabel.innerText = 1300;
        
    } else if (x.match("Finland")&& (y.match("Egypt"))) {
        priceLabel.innerText = 3600;
        Image.src = "img/buisness.jpg"
    } else if (x.match("Greece")&& (y.match("Egypt"))) {
        priceLabel.innerText = 3600;
        Image.src = "img/buisness.jpg"
    }else if (x.match("India")&& (y.match("Egypt"))) {
        priceLabel.innerText = 3600;
        Image.src = "img/buisness.jpg"
    }
}