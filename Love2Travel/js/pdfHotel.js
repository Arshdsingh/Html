var temphotelUserName = localStorage.getItem('LocalUserName');
var temphotelType = localStorage.getItem('hotelBookedType');
var tempnoOfPerson = localStorage.getItem('noOfPeople');
var temphotelPrice = localStorage.getItem('finalHotelPrice');
var tempcheckindate = localStorage.getItem('checkindate');
var tempcheckoutdate = localStorage.getItem('checkoutdate');

var x = Math.floor((Math.random() * 438274) + 1);

var date = new Date();
function generateHotelPdf() {
    var doc = new jsPDF();
    doc.rect(5, 5, 200, 90)
    doc.setFontSize(40);
    doc.setFont("helvetica");
    doc.text(45,18,'PAYMENT RECIEPT');
    doc.setFontSize(20);
    doc.text(14,28,'Love To Travel');
    doc.setFontSize(15);
    doc.text(14,34,'Current Date :'+date);
    doc.text(14,40,'Booking Details');

    doc.text(14,46,'Hotel Type');
    doc.text(70,46,'No of Person');
    
    doc.text(14,54,temphotelType);
    doc.text(70,54,tempnoOfPerson);

    doc.text(14,62,'Checkin Date : '+tempcheckindate);
    doc.text(14,68,'Checkout Date : '+tempcheckoutdate);
   
    doc.text(14,81,'Price $: '+temphotelPrice);
    doc.text(80,81,'Form Of Payment : Credit Card');
    doc.text(14,74,'Booking Number : '+x);
    doc.text(14,86,'Name : '+temphotelUserName);
    

    doc.save('Reciept.pdf');
}