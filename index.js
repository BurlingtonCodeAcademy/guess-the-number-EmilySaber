const { exit } = require('process');
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


        if (nextQ4 == "L") {
          console.log("Is your number " + 3 + " ?")
          let fifthResponse = await ask("Y/N ");
          if (fifthResponse === "N") {
            console.log(highOrLow) // is it higher or lower
          }
          else {
            console.log("Your number was " + 3 + "\nI guessed it in 5 tries") //win
            process.exit();
          }

          let nextQ5 = await ask("H/L ") // is it higher or lower than 3

          if (nextQ5 == "L") {  // lower than 3
            console.log("Is your number " + 2 + " ?")
            let fifthResponse = await ask("Y/N ");
            if (fifthResponse === "N") {
              console.log(highOrLow) // is it higher or lower
            }
            else {
              console.log("Your number was " + 2 + "\nI guessed it in 6 tries") //win
              process.exit();
            }
            let nextQ6 = await ask("H/L ") // is it higher or lower than 2

            if (nextQ6 == "L") {
              console.log("Is your number " + 1 + "?")
              let sixthResponse = await ask("Y/N ")
              if (sixthResponse === "N") {
                console.log("LIAR YOUR NUMBER WAS " + secretNumber)
                process.exit();
              }

              else {
                console.log("Your number was " + 1 + "\nI guessed it in 7 tries")
                process.exit();
              }

            }
            else (nextQ6 == "H")
            {
              console.log("LIAR YOUR NUMBER WAS " + secretNumber)
              process.exit();
            }

          }
          else (nextQ5 == "H") // higher than 3
          {
            console.log("Is your number " + 5 + " ?")

            let fifthResponse = await ask("Y/N ");

            if (fifthResponse === "N") {
              console.log(highOrLow)
            } else {
              console.log("Your number was " + 5 + "\nI guessed it in 6 tries")
              process.exit();
            }

            let nextQ6 = await ask("H/L ") // is it higher or lower than 5
            if (nextQ6 == "L") {
              console.log("Is your number " + 4 + "?")
              let sixthResponse = await ask("Y/N ")
              if (sixthResponse === "N") {
                console.log("LIAR YOUR NUMBER WAS " + secretNumber)
                process.exit();
              }

              else {
                console.log("Your number was " + 4 + "\n I guessed it in 7 tries")
                process.exit();
              }
            }
            else if (nextQ6 === "H") {
              console.log("Is your number " + 6 + "?")
              let sixthResponse = await ask("Y/N ")
              if (sixthResponse === "N") {
                console.log("LIAR YOUR NUMBER WAS " + secretNumber)
                process.exit();
              }
              else {
                console.log("Your number was " + 6 + "\n I guessed it in 7 tries")
                process.exit();
              }
            }
          }
        }


        else {
          (nextQ4 === "H")
          console.log("Is your number " + 10 + " ?")
          let fourthResponse = await ask("Y/N ");
          if (fourthResponse === "N") {
            console.log(highOrLow) // is it higher or lower
          }
          else {
            console.log("Your number was " + 10 + "\nI guessed it in 5 tries") //win
            process.exit();
          }

          let nextQ5 = await ask("H/L ") // is it higher or lower than ten *****

          if (nextQ5 == "L") {
            console.log("Is your number " + 9 + " ?")
            let fifthResponse = await ask("Y/N ");
            if (fifthResponse === "N") {
              console.log(highOrLow) //
            }
            else {
              console.log("Your number was " + 9 + "\nI guessed it in 6 tries")
              process.exit();
            }
            let nextQ6 = await ask("H/L ") // high or lower than 9

            if (nextQ6 == "L") {
              console.log("Is your number " + 8 + "?")
              let sixthResponse = await ask("Y/N ")
              if (sixthResponse === "N") {
                console.log("LIAR YOUR NUMBER WAS " + secretNumber)
                process.exit();
              }

              else {
                console.log("Your number " + 8 + "\nI guessed it in 7 tries")
                process.exit();
              }
            }
            (nextQ6 == "H")
            {
              console.log("LIAR YOUR NUMBER WAS " + secretNumber)
              process.exit();
            }

          }
          else (nextQ5 === "H") //higher or lower than 10
          {
            console.log("Is your number " + 12 + "?")

            let fifthResponse = await ask("Y/N ");

            if (fifthResponse === "N") {
              console.log(highOrLow)
            } else {
              console.log("Your number was " + 12 + "\nI guessed it in 6 tries")
              process.exit();
            }
            let nextQ6 = await ask("H/L") // is it higher or lower than 12
            if (nextQ6 === "L") {
              console.log("Is your number " + 11 + "?")
              let sixthResponse = await ask("Y/N ")
              if (sixthResponse === "Y") {
                console.log("Your number was " + 11 + "\nI guessed it in 7 tries")
                process.exit();
              }
              else if (sixthResponse === "N") {
                console.log("LIAR YOUR NUMBER WAS " + secretNumber)
                process.exit();
              }
            }
            else (nextQ6 === "H")
            {
              console.log("LIAR YOU NUMBER WAS " + secretNumber)
              process.exit();
            }
          }
        }
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

        if (nextQ4 == "L") {
          console.log("Is your number " + 16 + "?")
          let fifthResponse = await ask("Y/N ");
          if (fifthResponse === "N") {
            console.log(highOrLow)
          }

          else {
            console.log("Your number was " + 16 + "\nI guessed it in 5 tries")
            process.exit();
          }

          let nextQ5 = await ask("H/L ") // is it higher or lower than 16

          if (nextQ5 == "L") {
            console.log("Is your number 15?")
            let fifthResponse = await ask("Y/N ")
            if (fifthResponse === "N") {
              console.log(highOrLow)
            }
            else {
              console.log("Your number was 15" + "\nI guessed it in 6 tries")
              process.exit();
            }

            let nextQ6 = await ask("H/L ")// is it higher or lower than 15
            if (nextQ6 == "L") {
              console.log("Is your number 14?")
              let sixthResponse = await ask("Y/N ")
              if (sixthResponse === "N") {
                console.log("LIAR YOUR NUMBER WAS" + secretNumber)
                process.exit();
              }

              else {
                console.log("Your number was 14" + "\nI guessed it in 7 tries")
                process.exit();
              }
            }
            else if (nextQ6 === "H") {
              console.log("LIAR YOUR NUMBER WAS " + secretNumber)
              process.exit();
            }
          }
          else {
            (nextQ5 === "H")
            console.log("Is your number 18?")
            let fifthResponse = await ask("Y/N ");
            if (fifthResponse === "N") {
              console.log(highOrLow)
            }
            else {
              console.log("Your number was 18" + "\nI guessed it in 5 tries")
              process.exit();
            }

            let nextQ6 = await ask("H/L ")// is it higher or lower than 18
            if (nextQ6 === "L") {
              console.log("Is your number 17?")
              let sixthResponse = await ask("Y/N ")
              if (sixthResponse === "N") {
                console.log("LIAR YOUR NUMBER WAS " + secretNumber)
                process.exit();
              }

              else {
                console.log("Your number was 17" + "\nI guessed it in 7 tries")
                process.exit();
              }
            }
            else if (nextQ6 === "H") {
              console.log("LIAR YOUR NUMBER WAS " + secretNumber)
              process.exit();
            }
          }
        }

        else {
          (nextQ4 === "H") // higher than 19
          console.log("Is your number 22?")
          let fourthResponse = await ask("Y/N ");
          if (fourthResponse === "N") {
            console.log(highOrLow)
          }
          else {
            console.log("Your number was 22" + "\nI guessed it in 5 tries")
            process.exit()
          }

          let nextQ5 = await ask("H/L ") // is it higher or lower than 22

          if (nextQ5 === "L") {
            console.log("Is your number 21?")
            let fifthResponse = await ask("Y/N ");
            if (fifthResponse === "N") {
              console.log(highOrLow)
            }
            else {
              console.log("Your number was 21" + "\nI guessed it in 6 tries")
              process.exit();
            }
            let nextQ6 = await ask("H/L ") // higher or lower than 21

            if (nextQ6 === "L") {
              console.log("Is your number 20?")
              let sixthResponse = await ask("Y/N ")
              if (sixthResponse === "N") {
                console.log("LIAR YOUR NUMBER WAS " + secretNumber)
                process.exit();
              }
              else {
                console.log("Your number was 20 " + "\nI guessed it in 7 tries")
                process.exit();
              }
            }
            else (nextQ6 === "H")
            {
              console.log("LIAR YOU NUMBER WAS " + secretNumber)
              process.exit();
            }
          }

          else (nextQ5 === "H") // higher than 22
          {
            console.log("Is your number 24?")

            let fifthResponse = await ask("Y/N ");

            if (fifthResponse === "N") {
              console.log(highOrLow)
            } else {
              console.log("Your number was 24" + "\n I guessed it in 6 tries")
              process.exit();
            }
            let nextQ6 = await ask("H/L ") // is it higher or lower than 24
            if (nextQ6 === "L") {
              console.log("Is your number " + 23 + "?")
              let sixthResponse = await ask("Y/N ")
              if (sixthResponse === "Y") {
                console.log("Your number was " + 23 + "\nI guessed it in 7 tries")
                process.exit();
              }
              else if (sixthResponse === "N") {
                console.log("LIAR YOUR NUMBER WAS " + secretNumber)
                process.exit();
              }
            }
            else (nextQ6 === "H")
            {
              console.log("LIAR YOU NUMBER WAS " + secretNumber)
              process.exit();
            }
          }
        }
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
      let nextQ3 = await ask("H/L ") // is it higher or lower than 38 

      if (nextQ3 == "L") {
        console.log("Is your number " + 32 + " ?")
        let fourthResponse = await ask("Y/N ");
        if (fourthResponse === "N") {
          console.log(highOrLow) // is it higher or lower
        }
        else {
          console.log("Your number was " + 32 + "\nI guessed it in 4 tries") //win
          process.exit();
        }

        let nextQ4 = await ask("H/L ") //is it higher or lower than 32

        if (nextQ4 == "L") {
          console.log("Is your number " + 28 + " ?")
          let fifthResponse = await ask("Y/N ");
          if (fifthResponse === "N") {
            console.log(highOrLow) // is it higher or lower
          }
          else {
            console.log("Your number was " + 28 + "\nI guessed it in 5 tries") //win
            process.exit();
          }
          let nextQ5 = await ask("H/L ") // is it higher or lower than 28

          if (nextQ5 == "L") {  // lower than 28
            console.log("Is your number " + 27 + " ?")
            let fifthResponse = await ask("Y/N ");
            if (fifthResponse === "N") {
              console.log(highOrLow) // is it higher or lower
            }
            else {
              console.log("Your number was " + 27 + "\nI guessed it in 6 tries") //win
              process.exit();
            }
            let nextQ6 = await ask("H/L ") // is it higher or lower than 27

            if (nextQ6 == "L") {
              console.log("Is your number " + 26 + "?")
              let sixthResponse = await ask("Y/N ")
              if (sixthResponse === "N") {
                console.log("LIAR YOUR NUMBER WAS " + secretNumber)
                process.exit();
              }

              else {
                console.log("Your number was " + 26 + "\nI guessed it in 7 tries")
                process.exit();
              }

            }
            else (nextQ6 == "H")
            {
              console.log("LIAR YOUR NUMBER WAS " + secretNumber)
              process.exit();
            }

          }
          else (nextQ5 == "H") // higher than 28
          {
            console.log("Is your number " + 30 + " ?")

            let fifthResponse = await ask("Y/ N ");

            if (fifthResponse === "N") {
              console.log(highOrLow)
            } else {
              console.log("Your number was " + 30 + "\nI guessed it in 6 tries")
              process.exit();
            }
          }
          let nextQ6 = await ask("H/L ") // is it higher or lower than 30
          if (nextQ6 == "L") {
            console.log("Is your number " + 29 + "?")
            let sixthResponse = await ask("Y/N ")
            if (sixthResponse === "N") {
              console.log("LIAR YOUR NUMBER WAS " + secretNumber)
              process.exit();
            }

            else {
              console.log("Your number was " + 29 + "\n I guessed it in 7 tries")
              process.exit();
            }
          }
          else if (nextQ6 === "H") {
            console.log("Is your number " + 31 + "?")
            let sixthResponse = await ask("Y/N ")
            if (sixthResponse === "N") {
              console.log("LIAR YOUR NUMBER WAS " + secretNumber)
              process.exit();
            }
            else {
              console.log("Your number was " + 31 + "\n I guessed it in 7 tries")
              process.exit();
            }
          }
        }

        else {
          (nextQ4 === "H")
          console.log("Is your number " + 35 + " ?")
          let fourthResponse = await ask("Y/N ");
          if (fourthResponse === "N") {
            console.log(highOrLow) // is it higher or lower
          }
          else {
            console.log("Your number was " + 35 + "\nI guessed it in 5 tries") //win
            process.exit();
          }

          let nextQ5 = await ask("H/L ") // is it higher or lower than 35

          if (nextQ5 == "L") {
            console.log("Is your number " + 34 + " ?")
            let fifthResponse = await ask("Y/N ");
            if (fifthResponse === "N") {
              console.log(highOrLow) //
            }
            else {
              console.log("Your number was " + 34 + "\nI guessed it in 6 tries")
              process.exit();
            }
            let nextQ6 = await ask("H/L ") // high or lower than 34

            if (nextQ6 == "L") {
              console.log("Is your number " + 33 + "?")
              let sixthResponse = await ask("Y/N ")
              if (sixthResponse === "N") {
                console.log("LIAR YOUR NUMBER WAS " + secretNumber)
                process.exit();
              }

              else {
                console.log("Your number " + 33 + "\nI guessed it in 7 tries")
                process.exit();
              }
            }
            (nextQ6 == "H")
            {
              console.log("LIAR YOUR NUMBER WAS " + secretNumber)
              process.exit();
            }
          }
          else (nextQ5 === "H") //higher or lower than 35
          {
            console.log("Is your number " + 37 + "?")

            let fifthResponse = await ask("Y/N ");

            if (fifthResponse === "N") {
              console.log(highOrLow)
            } else {
              console.log("Your number was " + 37 + "\n I guessed it in 6 tries")
              process.exit();
            }
            let nextQ6 = await ask("H/L ") // is it higher or lower than 37
            if (nextQ6 === "L") {
              console.log("Is your number " + 36 + "?")
              let sixthResponse = await ask("Y/N ")
              if (sixthResponse === "Y") {
                console.log("Your number was " + 36 + "\nI guessed it in 7 tries")
                process.exit();
              }
              else if (sixthResponse === "N") {
                console.log("LIAR YOUR NUMBER WAS " + secretNumber)
                process.exit();
              }
            }
            else (nextQ6 === "H")
            {
              console.log("LIAR YOU NUMBER WAS " + secretNumber)
              process.exit();
            }
          }
        }
      }
      else {
        (nextQ3 === "H")
        console.log("Is your number " + 44 + " ?")
        let fourthResponse = await ask("Y/N ");
        if (fourthResponse === "N") {
          console.log(highOrLow) // is it higher or lower
        }
        else {
          console.log("Your number was " + 44 + "\nI guessed it in 4 tries") //win
          process.exit();
        }
        let nextQ4 = await ask("H/L ") //is it higher or lower than 44
        if (nextQ4 == "L") {
          console.log("Is your number " + 41 + "?")
          let fifthResponse = await ask("Y/N ");
          if (fifthResponse === "N") {
            console.log(highOrLow)
          }
          else {
            console.log("Your number was " + 41 + "\nI guessed it in 5 tries")
            process.exit();
          }
          let nextQ5 = await ask("H/L ") // is it higher or lower than 41
          if (nextQ5 == "L") {
            console.log("Is your number 40?")
            let fifthResponse = await ask("Y/N ")
            if (fifthResponse === "N") {
              console.log(highOrLow)
            }
            else {
              console.log("Your number was 40" + "\nI guessed it in 6 tries")
              process.exit();
            }
            let nextQ6 = await ask("H/L ")// is it higher or lower than 40
            if (nextQ6 == "L") {
              console.log("Is your number 39?")
              let sixthResponse = await ask("Y/N ")
              if (sixthResponse === "N") {
                console.log("LIAR YOUR NUMBER WAS" + secretNumber)
                process.exit();
              }
              else {
                console.log("Your number was 39" + "\nI guessed it in 7 tries")
                process.exit();
              }
            }
            else (nextQ6 === "H")
            {
              console.log("LIAR YOU NUMBER WAS " + secretNumber)
              process.exit();
            }
          }
          else {
            (nextQ5 === "H")
            console.log("Is your number 43?")
            let fifthResponse = await ask("Y/N ");
            if (fifthResponse === "N") {
              console.log(highOrLow)
            }
            else {
              console.log("Your number was 43" + "\nI guessed it in 5 tries")
              process.exit();
            }
            let nextQ6 = await ask("H/L ")// is it higher or lower than 43
            if (nextQ6 === "L") {
              console.log("Is your number 42?")
              let sixthResponse = await ask("Y/N ")
              if (sixthResponse === "N") {
                console.log("LIAR YOUR NUMBER WAS " + secretNumber)
                process.exit();
              }
              else {
                console.log("Your number was 42" + "\nI guessed it in 7 tries")
                process.exit();
              }
            }
            else if (nextQ6 === "H") {
              console.log("LIAR YOUR NUMBER WAS " + secretNumber)
              process.exit();
            }
          }
        }
        else {
          (nextQ4 === "H") // higher than 44
          console.log("Is your number 47?")
          let fourthResponse = await ask("Y/N ");
          if (fourthResponse === "N") {
            console.log(highOrLow)
          }
          else {
            console.log("Your number was 47" + "\nI guessed it in 5 tries")
            process.exit()
          }
          let nextQ5 = await ask("H/L ") // is it higher or lower than 47

          if (nextQ5 === "L") {
            console.log("Is your number 46?")
            let fifthResponse = await ask("Y/N ");
            if (fifthResponse === "N") {
              console.log(highOrLow)
            }
            else {
              console.log("Your number was 46" + "\nI guessed it in 6 tries")
              process.exit();
            }
            let nextQ6 = await ask("H/L ") // higher or lower than 46

            if (nextQ6 === "L") {
              console.log("Is your number 45?")
              let sixthResponse = await ask("Y/N ")
              if (sixthResponse === "N") {
                console.log("LIAR YOUR NUMBER WAS " + secretNumber)
                process.exit();
              }
              else {
                console.log("Your number was 45 " + "\nI guessed it in 7 tries")
                process.exit();
              }
            }
            else (nextQ6 === "H")
            {
              console.log("LIAR YOU NUMBER WAS " + secretNumber)
              process.exit();
            }
          }
          else (nextQ5 === "H") // higher than 47
          {
            console.log("Is your number 49?")

            let fifthResponse = await ask("Y/N ");

            if (fifthResponse === "N") {
              console.log(highOrLow)
            } else {
              console.log("Your number was 49" + "\n I guessed it in 6 tries")
              process.exit();
            }
            let nextQ6 = await ask("H/L ") // is it higher or lower than 49
            if (nextQ6 === "L") {
              console.log("Is your number " + 48 + "?")
              let sixthResponse = await ask("Y/N ")
              if (sixthResponse === "Y") {
                console.log("Your number was " + 48 + "\nI guessed it in 7 tries")
                process.exit();
              }
              else if (sixthResponse === "N") {
                console.log("LIAR YOUR NUMBER WAS " + secretNumber)
                process.exit();
              }
            }
            else (nextQ6 === "H")
            {
              console.log("LIAR YOU NUMBER WAS " + secretNumber)
              process.exit();
            }
          }
        }
      }
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

      let thirdResponse = await ask("Y/N ");
      if (thirdResponse === "N") {
        console.log(highOrLow) // is it higher or lower 
      }
      else {
        console.log("Your number was " + 63 + "\nI guessed it in 3 tries") //win
        process.exit();
      }

      let nextQ3 = await ask("H/L ") //is it higher or lower than 63

      if (nextQ3 == "L") {
        console.log("Is your number " + 57 + " ?")
        let fourthResponse = await ask("Y/N ");
        if (fourthResponse === "N") {
          console.log(highOrLow) // is it higher or lower
        }
        else {
          console.log("Your number was " + 57 + "\nI guessed it in 4 tries") //win
          process.exit();
        }

        let nextQ4 = await ask("H/L ") //is it higher or lower than 57 

        if (nextQ4 == "L") {
          console.log("Is your number " + 54 + " ?")
          let fifthResponse = await ask("Y/N ");
          if (fifthResponse === "N") {
            console.log(highOrLow) // is it higher or lower
          }
          else {
            console.log("Your number was " + 54 + "\nI guessed it in 5 tries") //win
            process.exit();
          }

          let nextQ5 = await ask("H/L ") // is it higher or lower than 54

          if (nextQ5 == "L") {  // lower than 54
            console.log("Is your number " + 52 + " ?")
            let fifthResponse = await ask("Y/N ");
            if (fifthResponse === "N") {
              console.log(highOrLow) // is it higher or lower
            }
            else {
              console.log("Your number was " + 52 + "\nI guessed it in 6 tries") //win
              process.exit();
            }
            let nextQ6 = await ask("H/L ") // is it higher or lower than 52

            if (nextQ6 == "L") {
              console.log("Is your number " + 51 + "?")
              let sixthResponse = await ask("Y/N ")
              if (sixthResponse === "N") {
                console.log("LIAR YOUR NUMBER WAS " + secretNumber)
                process.exit();
              }
              else {
                console.log("Your number was " + 51 + "\n I guessed it in 7 tries")
                process.exit();
              }
            }
            else (nextQ6 == "H")
            {
              console.log("Is your number 53?")
              let sixthResponse = await ask("Y/N ")
              if (sixthResponse === "N") {
                console.log("LIAR YOUR NUMBER WAS " + secretNumber)
                process.exit();
              }
              else {
                console.log("Your number was " + 53 + "\nI guessed it in 7 tries")
                process.exit();
              }
            }
          }
          else (nextQ5 == "H") // higher than 54
          {
            console.log("Is your number " + 56 + " ?")

            let fifthResponse = await ask("Y/N ");

            if (fifthResponse === "N") {
              console.log(highOrLow)
            } else {
              console.log("Your number was " + 56 + "\nI guessed it in 6 tries")
              process.exit();
            }
            let nextQ6 = await ask("H/L ") // is it higher or lower than 56
            if (nextQ6 == "L") {
              console.log("Is your number " + 55 + "?")
              let sixthResponse = await ask("Y/N ")
              if (sixthResponse === "N") {
                console.log("LIAR YOUR NUMBER WAS " + secretNumber)
                process.exit();
              }

              else {
                console.log("Your number was " + 55 + "\nI guessed it in 7 tries")
                process.exit();
              }
            }
            else (nextQ6 == "H")
            {
              console.log("LIAR YOUR NUMBER WAS " + secretNumber)
              process.exit();
            }
          }
        }
        else {
          (nextQ4 === "H")
          console.log("Is your number " + 60 + " ?")
          let fourthResponse = await ask("Y/N ");
          if (fourthResponse === "N") {
            console.log(highOrLow) // is it higher or lower
          }
          else {
            console.log("Your number was " + 60 + "\nI guessed it in 5 tries") //win
            process.exit();
          }
          let nextQ5 = await ask("H/L ") // is it higher or lower than 60

          if (nextQ5 == "L") {
            console.log("Is your number " + 59 + " ?")
            let fifthResponse = await ask("Y/N ");
            if (fifthResponse === "N") {
              console.log(highOrLow) //
            }
            else {
              console.log("Your number was " + 59 + "\nI guessed it in 6 tries")
              process.exit();
            }
            let nextQ6 = await ask("H/L ") // high or lower than 59

            if (nextQ6 == "L") {
              console.log("Is your number " + 58 + "?")
              let sixthResponse = await ask("Y/N ")
              if (sixthResponse === "N") {
                console.log("LIAR YOUR NUMBER WAS " + secretNumber)
                process.exit();
              }

              else {
                console.log("Your number " + 58 + "\nI guessed it in 7 tries")
                process.exit();
              }
            }
            else if (nextQ6 == "H") {
              console.log("LIAR YOUR NUMBER WAS " + secretNumber)
              process.exit();
            }
          }
          else (nextQ5 === "H") //higher or lower than 60
          {
            console.log("Is your number " + 62 + "?")

            let fifthResponse = await ask("Y/N ");

            if (fifthResponse === "N") {
              console.log(highOrLow)
            } else {
              console.log("Your number was " + 62 + "\nI guessed it in 6 tries")
              process.exit();
            }
            let nextQ6 = await ask("H/L") // is it higher or lower than 12
            if (nextQ6 === "L") {
              console.log("Is your number " + 61 + "?")
              let sixthResponse = await ask("Y/N ")
              if (sixthResponse === "Y") {
                console.log("Your number was " + 61 + "\nI guessed it in 7 tries")
                process.exit();
              }
              else if (sixthResponse === "N") {
                console.log("LIAR YOUR NUMBER WAS " + secretNumber)
                process.exit();
              }
            }
            else if (nextQ6 === "H") {
              console.log("LIAR YOUR NUMBER WAS " + secretNumber)
              process.exit();
            }
          }
        }
      }
      else {
        (nextQ3 === "H")
        console.log("Is your number " + 69 + " ?")
        let fourthResponse = await ask("Y/N ");
        if (fourthResponse === "N") {
          console.log(highOrLow) // is it higher or lower
        }
        else {
          console.log("Your number was " + 69 + "\nI guessed it in 4 tries") //win
          process.exit();
        }
        let nextQ4 = await ask("H/L ") //is it higher or lower than 69
        if (nextQ4 == "L") {
          console.log("Is your number " + 66 + "?")
          let fifthResponse = await ask("Y/N ");
          if (fifthResponse === "N") {
            console.log(highOrLow)
          }

          else {
            console.log("Your number was " + 66 + "\nI guessed it in 5 tries")
            process.exit();
          }
          let nextQ5 = await ask("H/L ") // is it higher or lower than 16

          if (nextQ5 == "L") {
            console.log("Is your number 65?")
            let fifthResponse = await ask("Y/N ")
            if (fifthResponse === "N") {
              console.log(highOrLow)
            }
            else {
              console.log("Your number was 65" + "\nI guessed it in 6 tries")
              process.exit();
            }
            let nextQ6 = await ask("H/L ")// is it higher or lower than 65
            if (nextQ6 == "L") {
              console.log("Is your number 64?")
              let sixthResponse = await ask("Y/N ")
              if (sixthResponse === "N") {
                console.log("LIAR YOUR NUMBER WAS " + secretNumber)
                process.exit();
              }

              else {
                console.log("Your number was 64" + "\nI guessed it in 7 tries")
                process.exit();
              }
            }
            else if (nextQ6 === "H") {
              console.log("LIAR YOUR NUMBER WAS " + secretNumber)
              process.exit();
            }
          }
          else {
            (nextQ5 === "H")
            console.log("Is your number 68?")
            let fifthResponse = await ask("Y/N ");
            if (fifthResponse === "N") {
              console.log(highOrLow)
            }
            else {
              console.log("Your number was 68" + "\nI guessed it in 5 tries")
              process.exit();
            }
            let nextQ6 = await ask("H/L ")// is it higher or lower than 68
            if (nextQ6 === "L") {
              console.log("Is your number 67?")
              let sixthResponse = await ask("Y/N ")
              if (sixthResponse === "N") {
                console.log("LIAR YOUR NUMBER WAS " + secretNumber)
                process.exit();
              }

              else {
                console.log("Your number was 67" + "\nI guessed it in 7 tries")
                process.exit();
              }
            }
            else if (nextQ6 === "H") {
              console.log("LIAR YOUR NUMBER WAS " + secretNumber)
              process.exit();
            }
          }
        }
        else {
          (nextQ4 === "H") // higher than 69
          console.log("Is your number 72?")
          let fourthResponse = await ask("Y/N ");
          if (fourthResponse === "N") {
            console.log(highOrLow)
          }
          else {
            console.log("Your number was 72" + "\nI guessed it in 5 tries")
            process.exit()
          }

          let nextQ5 = await ask("H/L ") // is it higher or lower than 72
          if (nextQ5 === "L") {
            console.log("Is your number 71?")
            let fifthResponse = await ask("Y/N ");
            if (fifthResponse === "N") {
              console.log(highOrLow)
            }
            else {
              console.log("Your number was 71" + "\nI guessed it in 6 tries")
              process.exit();
            }
            let nextQ6 = await ask("H/L ") // higher or lower than 71

            if (nextQ6 === "L") {
              console.log("Is your number 70?")
              let sixthResponse = await ask("Y/N ")
              if (sixthResponse === "N") {
                console.log("LIAR YOUR NUMBER WAS " + secretNumber)
                process.exit();
              }
              else {
                console.log("Your number was 70 " + "\nI guessed it in 7 tries")
                process.exit();
              }
            }
            else (nextQ6 === "H")
            {
              console.log("LIAR YOU NUMBER WAS " + secretNumber)
              process.exit();
            }
          }
          else (nextQ5 === "H") // higher than 72
          {
            console.log("Is your number 74?")

            let fifthResponse = await ask("Y/N ");

            if (fifthResponse === "N") {
              console.log(highOrLow)
            } else {
              console.log("Your number was 74" + "\n I guessed it in 6 tries")
              process.exit();
            }
            let nextQ6 = await ask("H/L ") // is it higher or lower than 74
            if (nextQ6 === "L") {
              console.log("Is your number " + 73 + "?")
              let sixthResponse = await ask("Y/N ")
              if (sixthResponse === "Y") {
                console.log("Your number was " + 73 + "\nI guessed it in 7 tries")
                process.exit();
              }
              else if (sixthResponse === "N") {
                console.log("LIAR YOUR NUMBER WAS " + secretNumber)
                process.exit();
              }
            }
            else (nextQ6 === "H")
            {
              console.log("LIAR YOU NUMBER WAS " + secretNumber)
              process.exit();
            }
          }
        }
      }
    }

    /// start OFF HERE EM


    else {
      (nextQ2 === "H")
      console.log("Is your number " + 88 + " ?")

      let thirdResponse = await ask("Y/N ");
      if (thirdResponse === "N") {
        console.log(highOrLow) // is it higher or lower 
      }
      else {
        console.log("Your number was " + 88 + "\n I guessed it in 3 tries") //win 
        process.exit();
      }
      let nextQ3 = await ask("H/L ") // is it higher or lower than 88

      if (nextQ3 == "L") {
        console.log("Is your number " + 82 + " ?")
        let fourthResponse = await ask("Y/N ");
        if (fourthResponse === "N") {
          console.log(highOrLow) // is it higher or lower
        }
        else {
          console.log("Your number was " + 82 + "\nI guessed it in 4 tries") //win
          process.exit();
        }

        let nextQ4 = await ask("H/L ") //is it higher or lower than 82

        if (nextQ4 == "L") {
          console.log("Is your number " + 78 + " ?")
          let fifthResponse = await ask("Y/N ");
          if (fifthResponse === "N") {
            console.log(highOrLow) // is it higher or lower
          }
          else {
            console.log("Your number was " + 78 + "\nI guessed it in 5 tries") //win
            process.exit();
          }

          let nextQ5 = await ask("H/L ") // is it higher or lower than 78

          if (nextQ5 == "L") {  // lower than 78
            console.log("Is your number " + 77 + " ?")
            let fifthResponse = await ask("Y/N ");
            if (fifthResponse === "N") {
              console.log(highOrLow) // is it higher or lower
            }
            else {
              console.log("Your number was " + 77 + "\nI guessed it in 6 tries") //win
              process.exit();
            }

            let nextQ6 = await ask("H/L ") // is it higher or lower than 77

            if (nextQ6 == "L") {
              console.log("Is your number " + 76 + "?")
              let sixthResponse = await ask("Y/N ")
              if (sixthResponse === "N") {
                console.log("LIAR YOUR NUMBER WAS " + secretNumber)
                process.exit();
              }

              else {
                console.log("Your number was " + 76 + "\nI guessed it in 7 tries")
                process.exit();
              }

            }
            else (nextQ6 == "H")
            {
              console.log("LIAR YOUR NUMBER WAS " + secretNumber)
              process.exit();
            }
          }
          else (nextQ5 == "H") // higher than 78
          {
            console.log("Is your number " + 80 + " ?")

            let fifthResponse = await ask("Y/N ");

            if (fifthResponse === "N") {
              console.log(highOrLow)
            } else {
              console.log("Your number was " + 80 + "\nI guessed it in 6 tries")
              process.exit();
            }
          }
          let nextQ6 = await ask("H/L ") // is it higher or lower than 80
          if (nextQ6 == "L") {
            console.log("Is your number " + 79 + "?")
            let sixthResponse = await ask("Y/N ")
            if (sixthResponse === "N") {
              console.log("LIAR YOUR NUMBER WAS " + secretNumber)
              process.exit();
            }

            else {
              console.log("Your number was " + 29 + "\n I guessed it in 7 tries")
              process.exit();
            }
          }
          else if (nextQ6 === "H") {
            console.log("Is your number " + 81 + "?")
            let sixthResponse = await ask("Y/N ")
            if (sixthResponse === "N") {
              console.log("LIAR YOUR NUMBER WAS " + secretNumber)
              process.exit();
            }
            else {
              console.log("Your number was " + 81 + "\n I guessed it in 7 tries")
              process.exit();
            }
          }
        }
        else {
          (nextQ4 === "H")
          console.log("Is your number " + 85 + " ?")
          let fourthResponse = await ask("Y/N ");
          if (fourthResponse === "N") {
            console.log(highOrLow) // is it higher or lower
          }
          else {
            console.log("Your number was " + 85 + "\nI guessed it in 5 tries") //win
            process.exit();
          }
          let nextQ5 = await ask("H/L ") // is it higher or lower than 85

          if (nextQ5 == "L") {
            console.log("Is your number " + 84 + " ?")
            let fifthResponse = await ask("Y/N ");
            if (fifthResponse === "N") {
              console.log(highOrLow) //
            }
            else {
              console.log("Your number was " + 84 + "\nI guessed it in 6 tries")
              process.exit();
            }
            let nextQ6 = await ask("H/L ") // high or lower than 84

            if (nextQ6 == "L") {
              console.log("Is your number " + 83 + "?")
              let sixthResponse = await ask("Y/N ")
              if (sixthResponse === "N") {
                console.log("LIAR YOUR NUMBER WAS " + secretNumber)
                process.exit();
              }

              else {
                console.log("Your number " + 83 + "\nI guessed it in 7 tries")
                process.exit();
              }
            }
            (nextQ6 == "H")
            {
              console.log("LIAR YOUR NUMBER WAS " + secretNumber)
              process.exit();
            }
          }
          else (nextQ5 === "H") //higher or lower than 85
          {
            console.log("Is your number " + 87 + "?")

            let fifthResponse = await ask("Y/N ");

            if (fifthResponse === "N") {
              console.log(highOrLow)
            } else {
              console.log("Your number was " + 87 + "\n I guessed it in 6 tries")
              process.exit();
            }
            let nextQ6 = await ask("H/L ") // is it higher or lower than 87
            if (nextQ6 === "L") {
              console.log("Is your number " + 86 + "?")
              let sixthResponse = await ask("Y/N ")
              if (sixthResponse === "Y") {
                console.log("Your number was " + 86 + "\nI guessed it in 7 tries")
                process.exit();
              }
              else if (sixthResponse === "N") {
                console.log("LIAR YOUR NUMBER WAS " + secretNumber)
                process.exit();
              }
            }
            else (nextQ6 === "H")
            {
              console.log("LIAR YOU NUMBER WAS " + secretNumber)
              process.exit();
            }
          }
        }
      }
      else {
        (nextQ3 === "H")
        console.log("Is your number " + 94 + " ?")
        let fourthResponse = await ask("Y/N ");
        if (fourthResponse === "N") {
          console.log(highOrLow) // is it higher or lower
        }
        else {
          console.log("Your number was " + 94 + "\nI guessed it in 4 tries") //win
          process.exit();
        }
        let nextQ4 = await ask("H/L ") //is it higher or lower than 94
        if (nextQ4 == "L") {
          console.log("Is your number " + 91 + "?")
          let fifthResponse = await ask("Y/N ");
          if (fifthResponse === "N") {
            console.log(highOrLow)
          }
          else {
            console.log("Your number was " + 91 + "\nI guessed it in 5 tries")
            process.exit();
          }
          let nextQ5 = await ask("H/L ") // is it higher or lower than 91
          if (nextQ5 == "L") {
            console.log("Is your number 90 ?")
            let fifthResponse = await ask("Y/N ")
            if (fifthResponse === "N") {
              console.log(highOrLow)
            }
            else {
              console.log("Your number was 90" + "\nI guessed it in 6 tries")
              process.exit();
            }
            let nextQ6 = await ask("H/L ")// is it higher or lower than 90
            if (nextQ6 == "L") {
              console.log("Is your number 89 ?")
              let sixthResponse = await ask("Y/N ")
              if (sixthResponse === "N") {
                console.log("LIAR YOUR NUMBER WAS " + secretNumber)
                process.exit();
              }
              else {
                console.log("Your number was 89" + "\nI guessed it in 7 tries")
                process.exit();
              }
            }
            else (nextQ6 === "H")
            {
              console.log("LIAR YOU NUMBER WAS " + secretNumber)
              process.exit();
            }
          }
          else {
            (nextQ5 === "H")
            console.log("Is your number 93 ?")
            let fifthResponse = await ask("Y/N ");
            if (fifthResponse === "N") {
              console.log(highOrLow)
            }
            else {
              console.log("Your number was 93" + "\nI guessed it in 5 tries")
              process.exit();
            }
            let nextQ6 = await ask("H/L ")// is it higher or lower than 93
            if (nextQ6 === "L") {
              console.log("Is your number 92 ?")
              let sixthResponse = await ask("Y/N ")
              if (sixthResponse === "N") {
                console.log("LIAR YOUR NUMBER WAS " + secretNumber)
                process.exit();
              }
              else {
                console.log("Your number was 92" + "\nI guessed it in 7 tries")
                process.exit();
              }
            }
            else if (nextQ6 === "H") {
              console.log("LIAR YOUR NUMBER WAS " + secretNumber)
              process.exit();
            }
          }
        }
        else {
          (nextQ4 === "H") // higher than 94
          console.log("Is your number 98 ?")
          let fourthResponse = await ask("Y/N ");
          if (fourthResponse === "N") {
            console.log(highOrLow)
          }
          else {
            console.log("Your number was 98" + "\nI guessed it in 5 tries")
            process.exit()
          }
          let nextQ5 = await ask("H/L ") // is it higher or lower than 98

          if (nextQ5 === "L") {
            console.log("Is your number 96 ?")
            let fifthResponse = await ask("Y/N ");
            if (fifthResponse === "N") {
              console.log(highOrLow)
            }
            else {
              console.log("Your number was 96" + "\nI guessed it in 6 tries")
              process.exit();
            }
            let nextQ6 = await ask("H/L ") // higher or lower than 96

            if (nextQ6 === "L") {
              console.log("Is your number 95 ?")
              let sixthResponse = await ask("Y/N ")
              if (sixthResponse === "N") {
                console.log("LIAR YOUR NUMBER WAS " + secretNumber)
                process.exit();
              }
              else {
                console.log("Your number was 95 " + "\nI guessed it in 7 tries")
                process.exit();
              }
            }
            else (nextQ6 === "H")
            {
              console.log("Is your number 97 ?")
              let sixthResponse = await ask("Y/N ")
              if (sixthResponse === "N") {
                console.log("LIAR YOUR NUMBER WAS " + secretNumber)
                process.exit();
              }
              else {
                console.log("Your number was 97 " + "\nI guessed it in 7 tries")
                process.exit();
              }
            }
          }
          else (nextQ5 === "H") // higher than 98
          {
            console.log("Is your number 100 ?")

            let fifthResponse = await ask("Y/N ");

            if (fifthResponse === "N") {
              console.log(highOrLow)
            } else {
              console.log("Your number was 100 " + "\n I guessed it in 6 tries")
              process.exit();
            }
            let nextQ6 = await ask("H/L ") // is it higher or lower than 100
            if (nextQ6 === "L") {
              console.log("Is your number " + 99 + "?")
              let sixthResponse = await ask("Y/N ")
              if (sixthResponse === "Y") {
                console.log("Your number was " + 99 + "\nI guessed it in 7 tries")
                process.exit();
              }
              else if (sixthResponse === "N") {
                console.log("LIAR YOUR NUMBER WAS " + secretNumber)
                process.exit();
              }
            }
            else (nextQ6 === "H")
            {
              console.log("LIAR YOU NUMBER WAS " + secretNumber)
              process.exit();
            }
          }
        }
      }
    }
  }
}