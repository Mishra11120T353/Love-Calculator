//love calculator
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
const card = document.querySelector("#card");

//message variable
let message="";

//event listener for button click
btn.addEventListener("click", function(){
let name1 = document.querySelector("#yourName").value;
let name2 = document.querySelector("#partnerName").value;
let loveScore = Math.floor(Math.random()*100+1);

//conditions for love score
if (loveScore>=95){
 message="💖Soulmates!";
card.style.border="8px solid green";
}

else if (loveScore>=82){
message="✨Great Match!";
card.style.border="8px solid gold";
}
else if (loveScore>=67){
message="😊Good Connection!";
card.style.border="8px solid blue";
}

else if (loveScore>=38){
message="😁Just Friend!";
card.style.border="8px solid yellow";
}

else{
message="😹Better Luck Next Time!";
card.style.border="8px solid red";
}

//displaying the result
result.textContent =`${name1}❤️${name2} 
Love Score : ${loveScore} %  
${message}`;

});























