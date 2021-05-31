
let userInput = prompt("Hi, please enter the name of your favorite football club and the number of UEFA champions league titles they won separated by a space\nExample: Barca 5");

let usrNumber = document.querySelector("span");

userInput = userInput.split(" ");
//console.log(userInput);
if (userInput[0].constructor == String && !isNaN(userInput[1]) ) {
  for (let i = 0; i < userInput[1]; i++){
    document.write("<img src='https://www.pngarts.com/files/5/UEFA-Champions-League-Trophy-Transparent-Image.png'>");
  }

  usrNumber.innerHTML = userInput[1];
}


//console.log(usrNumber.innerHTML);

/*var cup = document.createElement('img');
cup.src="https://www.pngarts.com/files/5/UEFA-Champions-League-Trophy-Transparent-Image.png";
cup.style.width = "30%";
var cont = document.getElementById("trophies");*/

/*for (let i = 0; i < userInput; i++){
    document.write("<img src='https://www.pngarts.com/files/5/UEFA-Champions-League-Trophy-Transparent-Image.png'>");
}*/
// console.log(cont);