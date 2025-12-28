let homeScore = 12 ;
let guestScore= 8;

let scoreHomeEl=document.getElementById("homeScore-el")
let scoreGuestEl=document.getElementById("guestScore-el")


scoreHomeEl.innerText = homeScore;
scoreGuestEl.innerText = guestScore;

function addHome(value){
 
 homeScore = homeScore + value;
 scoreHomeEl.innerText=homeScore;


}

function addGuest(value){
 
 guestScore += value;
 scoreGuestEl.innerText=guestScore;
}

function reset(){
    homeScore = 0;
    scoreHomeEl.innerText=0;
    guestScore=0;
    scoreGuestEl.innerText=0;
}
