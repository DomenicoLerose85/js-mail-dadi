// email excercise

const newUserEmail = 0;

const emailButton = document.getElementById("email_verification");

emailButton.innerHTML = "Instert your email address";

emailButton.addEventListener("click"), function(){
    const newUserEmail = prompt("Insert your email address")
};

const EmailOutput = document.getElementById("visualizza");    

const authorizedEmailsArr = [
    "DomenicoLerose@gmail.com",
    "LeroseJoe@gmail.com",
    "Didy@hotmail.com",
    "SilviaDugato@gmail.com",
];

let rightEmail = false;

for(let i = 0; i < authorizedEmailsArr.length; i++){
    if(newUserEmail === authorizedEmailsArr[i]){
        rightEmail = true;
    }
};

if(rightEmail){
    EmailOutput.append("Welcome!");
    EmailOutput.innerHTML = "Welcome!";
}else{
    EmailOutput.append("Please enter a valid Email.")
    EmailOutput.innerHTML = "Please enter a valid Email.";
};

// /email excercise

// dadi excercise
rndmBtn.addEventListener("click", function(){
    const playerRandomNumber = Math.floor(Math.random()* 6) + 1;
    const computerRandomNumber = Math.floor(Math.random()* 6) + 1;
});

const playerNumber = document.getElementById("playerNumber");
const pcNumber = document.getElementById("computerNumber");
const winner = document.getElementById("winner");

pNumber.append(playerRandomNumber);
cNumber.append(computerRandomNumber);

if(playerRandomNumber > computerRandomNumber){
    winner.append("You won!");
} else {(computerRandomNumber > playerRandomNumber)  
    winner.append("The computer won!");
};









