const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)); // random number function
}

start();

async function start() {
  console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")
  let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
  console.log('You entered: ' + secretNumber);
  let fInput = getRandomInt(100) // this is your first input variable
  let firstResponse = await ask("Is your number " + fInput + " ?" + "\nY/N "); // first attempt at guess
  let highOrLow = "Is it higher or lower?" //reusable 
  let min = 1
  let sInput = getRandomInt(fInput) //this is the lesser than variable
  let pInput = Math.random(fInput, min) //NEED TO FIND THIS
  let max = 100


  // let sInputH = getRandomInt(> fInput) 

  if (firstResponse === "N") { //first logic here??

    console.log(highOrLow)
  }
  else {
    console.log("Your number was " + fInput + "!" + "\nI guessed it in 1 try")
    process.exit();
  }
  let nextQ = await ask("H/L ")
  
  if (nextQ == "L") { 
   console.log("Is your number " + sInput + " ?" + "\nY/N ") 
  }
  else {
    (nextQ === "H")  
  console.log("Is your number " + pInput + " ?" + "\nY/N " )


}}
