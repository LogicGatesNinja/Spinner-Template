// true spins right, false spins left
direction = true;
spinssincedonkey = 0;

function SpinToWin() {
    element = document.querySelector("#spin");
    element.src = "Spinner.png";
    var seed = Math.random();
    var seeddonkey = Math.random();

    if (seeddonkey > (0.98 - spinssincedonkey * 0.01)) {
        isdonkey = true;
        spinssincedonkey = 0;
    } else {
        isdonkey = false;
        spinssincedonkey++;
    }

    if (direction && (isdonkey != true)) {
        spin = 5000 + (seed * 360);
        element = document.querySelector("#spin");
        element.style.transform = 'rotate(' + spin + 'deg)';
    } else {
        if (isdonkey != true) {
            spin = 0 + (seed * 360);
            element = document.querySelector("#spin");
            element.style.transform = 'rotate(' + spin + 'deg)';
        } else {
            element = document.querySelector("#spin");
            element.src = "redonkulous.png";
            var audio = new Audio('DonkeyBray.mp3');
            audio.play();
            element.style.transform = 'rotate(' + "365" + 'deg)';
        }
    }

    if (direction) {
        direction = false;
    } else {
        direction = true;
    }
    setTimeout(10);
}