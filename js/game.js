//SCHNICK SCHNACK SCHNUCK
window.addEventListener('DOMContentLoaded', start,false);

function start(){
    btn = document.getElementById("playGame");
    const data = ["schere","stein","papier"];
    let p1, p2, msg, win;

    btn.addEventListener('click',function(e){init();e.preventDefault();},false);

    function init(){
        //draw random number
        p1 = draw();
        p2 = draw();
        msg = "";
        win = false;
        document.getElementById("p1").textContent = data[p1];
        document.getElementById("p2").textContent = data[p2];
        calcWinner();
    }

    function draw(){
        return Math.floor((Math.random() * data.length));
    }

    function calcWinner(){
        if(p1 !== p2){
            if(p1 === 0 && p2 === 1 || p1 === 1 && p2 === 2 || p1 === 2 && p2 === 0){
                msg = "verloren";
            } else{
                msg = "gewonnen"
            }
        }else{
            msg = "unentschieden";
        }
        document.getElementById("message").textContent = msg;
    }
}







//SURVEY


