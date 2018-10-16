var waterActivityDesc = document.getElementById('waterActivityDesc');
var divingActivityDesc = document.getElementById('divingActivityDesc');
var tennisActivityDesc = document.getElementById('tennisActivityDesc');
var golfActivityDesc = document.getElementById('golfActivityDesc');
var beachActivityDesc = document.getElementById('beachActivityDesc');

var sportImage = document.getElementById('sportImage');

waterActivityDesc.style.display = "block";
divingActivityDesc.style.display = "none";
tennisActivityDesc.style.display = "none";
golfActivityDesc.style.display = "none";
beachActivityDesc.style.display = "none";

function onActivityChange() {
    var x = document.getElementById("Activities").value;

    if (x.match("Water")) {
        sportImage.src = "img/water.jpg"
        waterActivityDesc.style.display = "block";
        divingActivityDesc.style.display = "none";
        tennisActivityDesc.style.display = "none";
        golfActivityDesc.style.display = "none";
        beachActivityDesc.style.display = "none";
    } else if (x.match("Diving")) {
        sportImage.src = "img/diving.jpg"
        waterActivityDesc.style.display = "none";
        divingActivityDesc.style.display = "block";
        tennisActivityDesc.style.display = "none";
        golfActivityDesc.style.display = "none";
        beachActivityDesc.style.display = "none";
    }
    else if (x.match("Tennis")) {
        sportImage.src = "img/tennis.jpg"
        waterActivityDesc.style.display = "none";
        divingActivityDesc.style.display = "none";
        tennisActivityDesc.style.display = "block";
        golfActivityDesc.style.display = "none";
        beachActivityDesc.style.display = "none";
    }
    else if (x.match("Golf")) {
        sportImage.src = "img/golf.jpg"
        waterActivityDesc.style.display = "none";
        divingActivityDesc.style.display = "none";
        tennisActivityDesc.style.display = "none";
        golfActivityDesc.style.display = "block";
        beachActivityDesc.style.display = "none";
    }
    else if (x.match("Beach")) {
        sportImage.src = "img/beach.jpg"
        waterActivityDesc.style.display = "none";
        divingActivityDesc.style.display = "none";
        tennisActivityDesc.style.display = "none";
        golfActivityDesc.style.display = "none";
        beachActivityDesc.style.display = "block";
    }
}