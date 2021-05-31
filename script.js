
let userInput = "";
let team = "";
let many = "";

// first time entry
userInput = prompt("Hi, please enter the name of your favorite football club and the number of UEFA champions league titles they won separated by a space\nExample: Barca 5").split(" ");

team = userInput[0];
many = userInput[1];

check(userInput); // calling the function

// the function body itself
function check(input) {

  this.team = team;
  this.many = many;

  userInput = input;
  
  while (userInput.length != 2 || this.team.constructor != String || Number(this.many) == 0 || isNaN(Number(this.many))) {

    userInput = prompt("Sorry, try again.\nHint: Barca 5");

    userInput = userInput.split(" ");
    this.team = userInput[0];
    this.many = userInput[1];
  }

  let usrNumber = document.querySelector("span");

  for (let i = 0; i < Number(this.many); i++){
    document.write("<img src='https://www.pngarts.com/files/5/UEFA-Champions-League-Trophy-Transparent-Image.png'>");

    usrNumber.innerHTML = this.many;
  }
  return null; // in this function I do not have to return a value so I wil just return null
}


