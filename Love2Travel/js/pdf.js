
function generatePdf() {
        var doc = new jsPDF();
        doc.setFontSize(10);
        doc.setFont("helvetica");
        doc.rect(0, 7, 150, 50);
        doc.text(2,12,'Account Holder Name');
        doc.setFontSize(5);
        doc.text(2,14,'3321,');
        doc.text(2,16,'Ellesmere Road, Ontario, M1B 1H1');


        doc.text(2,25,'Pay To The');
        doc.text(2,27,'Order Of ______________________________________________________________________________________________________ $');
        doc.rect(115, 25, 30, 5);
        doc.text(2,33,'____________________________________________________________________________________________________________/100 DOLLARS');
        doc.setFontSize(10);
        doc.text(2,37,'Lambton Bank');
        doc.setFontSize(5);
        doc.text(2,39,'3321,');
        doc.text(2,41,'Toronto, Ontario, M6B 2C2');
        doc.text(2,48,'"001"                    :05550                    004                    127864182178 "');
        doc.text(2,51,'                     Branch Transit                Bank Id                  Bank Account "');
        doc.text(2,53,'                        Number                      Number                     Number');


        doc.setFontSize(25);
        doc.setFontType("bold");
        doc.text(66,34,'VOID');
        doc.save('Void.pdf');
}