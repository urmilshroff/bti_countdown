var deathTime = new Date("April 17, 2020 17:00:00").getTime();

var bTechIntegrated = setInterval(function() {
    var now = new Date().getTime();
    var distance = deathTime - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("bti-countdown").innerHTML = "BTI over in " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(bTechIntegrated);
    }

}, 1000);