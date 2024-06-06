let seconds = 00;
let mil = 00;
let idSeconds, idMil, bStart, bPause, bReset, Interval; 

window.onload = function () {
     idSeconds = document.getElementById('seconds')
     idMil = document.getElementById('mil')
     bStart = document.getElementById('start')
     bPause = document.getElementById('pause')
     bReset = document.getElementById('reset')
  

    bStart.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    bPause.onclick = function() {
        clearInterval(Interval)
    }

    bReset.onclick = function() {
        clearInterval(Interval);
        mil = '00';
        seconds = '00';
        idMil.innerHTML = mil;
        idSeconds.innerHTML = seconds;
    }
  }
function startTimer () {
    mil++

    if(mil <= 9){
        idMil.innerHTML = '0' + mil;
    }

    if(mil > 9){
        idMil.innerHTML = mil;
    }

    if(mil > 99) {
        seconds++;
        idSeconds.innerHTML = '0' + seconds;
        mil = 0;
        idMil.innerHTML = '00';
    }

    if(seconds > 9) {
        idSeconds.innerHTML = seconds;
    }
}