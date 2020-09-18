const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomIntt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

start();

async function start() {
  console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")
  let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n"); //compare this somehow lol
  console.log('You entered: ' + secretNumber);
  //let fInput = getRandomInt(100) // this is your first input variable
  let firstResponse = await ask("Is your number " + 50 + " ?" + "\nY/N "); // first attempt at guess
  let highOrLow = "Is it higher or lower?" //reusable 
  //let min = 1
  //let max = 100
  //let sInput = getRandomInt(fInput) //this is the lesser than variable // NOT USING THIS RN MIGHT TAKE OUT
  //let pInput = getRandomIntt(fInput, max) //this is the higher than variable // NOT USING THIS RN MIGHT TAKE OUT

  if (firstResponse === "N") { //first logic here??

    console.log(highOrLow)
  }
  else {
    console.log("Your number was " + 50 + "!" + "\nI guessed it in 1 try") //win
    process.exit();
  }

  let nextQ = await ask("H/L ") // higher or lower than 50


  // use of logical operator to cross compare secret number with guess ??



  if (nextQ == "L") {
    console.log("Is your number " + 25 + " ?")

    let secondResponse = await ask("Y/N ");

    if (secondResponse === "N") {
      console.log(highOrLow) // is it higher or lower?
    }
    else {
      console.log("Your number was " + 25 + "!" + "\nI guessed it in 2 tries") //win
      process.exit();
    }
    let nextQ2 = await ask("H/L ") // higher or lower than 25 

    if (nextQ2 == "L") {
      console.log("Is your number " + 13 + " ?")

      let thirdResponse = await ask("Y/N ");
      if (thirdResponse === "N") {
        console.log(highOrLow) // is it higher or lower 
      }
      else {
        console.log("Your number was " + 13 + "\nI guessed it in 3 tries") //win
        process.exit();
      }
      let nextQ3 = await ask("H/L ") //is it higher or lower than 13 

      if (nextQ3 == "L") {
        console.log("Is your number " + 7 + " ?")
        let fourthResponse = await ask("Y/N ");
        if (fourthResponse === "N") {
          console.log(highOrLow) // is it higher or lower
        }
        else {
          console.log("Your number was " + 7 + "\nI guessed it in 4 tries") //win
          process.exit();
        }
        let nextQ4 = await ask("H/L ") //is it higher or lower than 7 
      }
      else {
        (nextQ3 === "H")
        console.log("Is your number " + 19 + " ?")
        let fourthResponse = await ask("Y/N ");
        if (fourthResponse === "N") {
          console.log(highOrLow) // is it higher or lower
        }
        else {
          console.log("Your number was " + 19 + "\nI guessed it in 4 tries") //win
          process.exit();
        }
        let nextQ4 = await ask("H/L ") //is it higher or lower than 19
      }
    }







    else {
      (nextQ2 === "H")
      console.log("Is your number " + 38 + " ?")

      let thirdResponse = await ask("Y/N ");
      if (thirdResponse === "N") {
        console.log(highOrLow) // is it higher or lower 
      }
      else {
        console.log("Your number was " + 38 + "\n I guessed it in 3 tries") //win 
        process.exit();
      }
      let nextQ3 = await ask("H/L ") // is it higher or lower than 38 need answer
    }
  }







  else {
    (nextQ === "H")
    console.log("Is your number " + 75 + " ?")

    let secondResponse = await ask("Y/N ");

    if (secondResponse === "N") {
      console.log(highOrLow) // is it higher or lower?
    }
    else {
      console.log("Your number was " + 75 + "!" + "\nI guessed it in 2 tries")
      process.exit();
    }

    let nextQ2 = await ask("H/L ") // higher or lower than 75
    if (nextQ2 == "L") {
      console.log("Is your number " + 63 + "?")

      let thirdResponse = await ask("Y/N"); //need higher logic
    }
  }
}