const btn = document.querySelector(".btn");
const result = document.querySelector("#result");
let message = document.querySelector("message");


btn.addEventListener("click", function(){
let name1 = document.querySelector("#yourName").value;
let name2 = document.querySelector("#partnerName").value;
let loveScore = Math.floor(Math.random()*100+1);
if(loveScore>=90){
message="perfect Match❤️";
}
else if (loveScore>=60){
message="Good Match✨";
}
else{
message="enemy😴";
}

result.textContent =`${name1}❤️${name2} Love Score : ${loveScore} %  ${message}`;

});























