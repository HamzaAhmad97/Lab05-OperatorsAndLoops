alert("Welcome! I have a question for you about football, let's start!");
let userInput = prompt("How many times has Chelsea FC won the UEFA chamipons league?");
while (userInput != 2) {
    userInput = prompt("Hmmm, let's try again. How many times has Chelsea FC won the UEFA chamipons league? \nHint: it is 2.");
    if (userInput == 2) break;
} 

/*var cup = document.createElement('img');
cup.src="https://www.pngarts.com/files/5/UEFA-Champions-League-Trophy-Transparent-Image.png";
cup.style.width = "30%";
var cont = document.getElementById("trophies");*/

for (let i = 0; i < 2; i++){
    document.write("<img src='https://www.pngarts.com/files/5/UEFA-Champions-League-Trophy-Transparent-Image.png'>");
}
// console.log(cont);