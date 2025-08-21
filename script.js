// variable //


// temps

let secondes = 0;
let minutes = 0;
let heures = 0;




// controle 

let is_running = false;
let interval_id = null;




// récup info html et function //

document.addEventListener("DOMContentLoaded",function(){
const display = document.getElementById("temps");
const btn_start = document.getElementById("btn_start");  
const btn_stop = document.getElementById("btn_stop");  
const btn_reset = document.getElementById("btn_reset"); 


    // affichage du temps 

    function format_time(h, m, s) {
        let hh = h < 10 ? "0" + h : h;
        let mm = m < 10 ? "0" + m : m;
        let ss = s < 10 ? "0" + s : s;
        return hh + ":" + mm + ":" + ss;
    }


    // mettre à jour l'affichage 

    function update_display() {
        display.textContent = format_time(heures, minutes, secondes);
    }


    // ajout du temps

    function tick() {
        secondes++;

        if (secondes >= 60){
            secondes = 0;
            minutes++;
        }

        if (minutes >= 60){
            minutes = 0;
            heures++;
        }

        update_display();
    }


    // fonctionnement des boutons

    function start(){
        if(!is_running){
            is_running = true;
            interval_id = setInterval(tick, 1000);
        }
    }

    function stop_chrono(){
        if(is_running){
            is_running = false;
            clearInterval(interval_id);
            interval_id = null;
        }
    }

    function reset(){
        stop_chrono();
        secondes = 0;
        minutes = 0;
        heures = 0;
        update_display();
    }


    // connexion des boutons au HTML

    btn_start.addEventListener("click", start);
    btn_stop.addEventListener("click", stop_chrono);
    btn_reset.addEventListener("click", reset)
});