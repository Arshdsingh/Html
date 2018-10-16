var date = new Date();
var tempfrom = localStorage.getItem('flightBookedFrom');
var tempflightType = localStorage.getItem('flightBookedType');
var tempflightPrice = localStorage.getItem('finalFlightPrice');
var tempFlightTo = localStorage.getItem('flightBookedTo');
var tempflightBookeddate = localStorage.getItem('tempflightBookeddate');
var temphotelUserName = localStorage.getItem('LocalUserName');

var x = Math.floor((Math.random() * 438274) + 1);

function generateFlightPdf() {
    var doc = new jsPDF();
    doc.rect(5, 5, 200, 80)
    doc.setFontSize(40);
    doc.setFont("helvetica");
    doc.text(45,18,'PAYMENT RECIEPT');
    doc.setFontSize(20);
    doc.text(14,28,'Love To Travel');
    doc.text(150,28,'E-Ticket');
    doc.setFontSize(15);
    doc.text(14,34,'Current Date :'+date);
    doc.text(14,40,'Booking Details');

    doc.text(14,46,'From');
    doc.text(70,46,'To');
    doc.text(130,46,'Class');
    doc.text(176,46,'Date');
    doc.text(14,54,tempfrom);
    doc.text(70,54,tempFlightTo);
    doc.text(130,54,tempflightType);
    doc.text(176,54,tempflightBookeddate);

    doc.text(14,62,'Fare $: '+tempflightPrice);
    doc.text(80,62,'Form Of Payment : Credit Card');
    doc.text(14,70,'E-TicketNumber : '+x);
    doc.text(14,76,'Name : '+temphotelUserName);
    

    doc.save('Reciept.pdf');
}