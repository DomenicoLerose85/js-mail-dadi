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







