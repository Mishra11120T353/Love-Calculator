let yourName = prompt ("What is your name?");
let partnerName = prompt("What is their name?");

let loveScore = Math.floor(Math.random()*100)+1;

alert(
    yourName+" and "+partnerName+"'s love score is "+loveScore+"%"
);

if (loveScore > 80){
    alert("Perfect Match💖");
}else{
    alert("Friend Zone😅");
}