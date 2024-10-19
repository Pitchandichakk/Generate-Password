const passwordBox = document.getElementById("password");
const length = 10;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const lowercase = "abcdefghijklmnopqrstuvwxyz";

const number = "0123456789"

const symbols = "@#$%^&*(){}[]<>.=+-_";


const allChars =upperCase + lowercase + number + symbols;

function createPassword(){
    let password ="";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
 
    while(length > password.length){
            password += allChars[Math.floor(Math.random() * allChars.length)]
    }

    passwordBox.value = password;


 }


function copypassword(){
passwordBox.select();
document.execCommand("copy");

alert("password has been copied")
}