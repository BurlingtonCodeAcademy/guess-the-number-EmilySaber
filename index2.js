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

start();

async function start() {
    console.log("Let's play a game where I (computer) make up a number (1-100) and you (human) try to guess it.")
    let secretNumber = getRandomInt(100)

    //console.log(secretNumber) // to see what computer guessed, develop delete when finished

    let win= "Congrats! You guessed my number!! "


//need to figure out how to create a loop or function for this ??


    let firstGuess = await ask("What is your guess? ")
    if(parseInt(firstGuess) === secretNumber){
        console.log(win +"It took one try")
        process.exit();
    }
    else if  (parseInt(firstGuess) < secretNumber )
    {
        console.log("Higher")
    }
    else 
        {
        console.log("Lower")        
    }
        
    let secondGuess = await ask("What is your guess? ")
    if(parseInt(secondGuess) === secretNumber){
        console.log(win + "It took two tries")
        process.exit();
    }
    else if  (parseInt(secondGuess) < secretNumber )
    {
        console.log("Higher")
    }
    else 
        {
        console.log("Lower")        
    }
 
    let thirdGuess = await ask("What is your guess? ")
    if(parseInt(thirdGuess) === secretNumber){
        console.log(win + "It took three tries")
        process.exit();
    }
    else if  (parseInt(thirdGuess) < secretNumber )
    {
        console.log("Higher")
    }
    else 
        {
        console.log("Lower")        
    }

    let fourthGuess = await ask("What is your guess? ")
    if(parseInt(fourthGuess) === secretNumber){
        console.log(win + "It took four tries")
        process.exit();
    }
    else if  (parseInt(fourthGuess) < secretNumber )
    {
        console.log("Higher")
    }
    else 
        {
        console.log("Lower")        
    }
 
    let fifthGuess = await ask("What is your guess? ")
    if(parseInt(fifthGuess) === secretNumber){
        console.log(win + "It took five tries")
        process.exit();
    }
    else if  (parseInt(fifthGuess) < secretNumber )
    {
        console.log("Higher")
    }
    else 
        {
        console.log("Lower")        
    }
    
    let sixthGuess = await ask("What is your guess? ")
    if(parseInt(sixthGuess) === secretNumber){
        console.log(win + "It took six tries")
        process.exit();
    }
    else if  (parseInt(sixthGuess) < secretNumber )
    {
        console.log("Higher")
    }
    else 
        {
        console.log("Lower")        
    }


    let seventhGuess = await ask("What is your guess? ")
    if(parseInt(seventhGuess) === secretNumber){
        console.log(win + "It took seven tries")
        process.exit();
    }
    else if  (parseInt(seventhGuess) < secretNumber )
    {
        console.log("Higher")
    }
    else 
        {
        console.log("Lower")        
    }

    let eightGuess = await ask("What is your guess? ")
    if(parseInt(eightGuess) === secretNumber){
        console.log(win + "It took eight tries")
        process.exit();
    }
    else if  (parseInt(eightGuess) < secretNumber )
    {
        console.log("Higher")
    }
    else 
        {
        console.log("Lower")        
    }

    let ninthGuess = await ask("What is your guess? ")
    if(parseInt(ninthGuess) === secretNumber){
        console.log(win + "It took nine tries")
        process.exit();
    }
    else if  (parseInt(ninthGuess) < secretNumber )
    {
        console.log("Higher")
    }
    else 
        {
        console.log("Lower")        
    }

    let tenthGuess = await ask("What is your guess? ")
    if(parseInt(tenthGuess) === secretNumber){
        console.log(win + "It took ten tries")
        process.exit();
    }
    else if  (parseInt(tenthGuess) < secretNumber )
    {
        console.log("Higher")
    }
    else 
        {
        console.log("Lower")        
    }

    let elevenGuees = await ask("What is your guess? ")
    if(parseInt(elevenGuees) === secretNumber){
        console.log(win + "It took eleven tries")
        process.exit();
    }
    else if  (parseInt(elevenGuees) < secretNumber )
    {
        console.log("Higher")
    }
    else 
        {
        console.log("Lower")        
    }

    let twelveGuess = await ask("What is your guess? ")
    if(parseInt(twelveGuess) === secretNumber){
        console.log(win + "It took twelve tries")
        process.exit();
    }
    else if  (parseInt(twelveGuess) < secretNumber )
    {
        console.log("Higher")
    }
    else 
        {
        console.log("Lower")        
    }

    let thirteenGuess = await ask("What is your guess? ")
    if(parseInt(thirteenGuess) === secretNumber){
        console.log(win + "It took thirteen tries")
        process.exit();
    }
    else if  (parseInt(thirteenGuess) < secretNumber )
    {
        console.log("Higher")
    }
    else 
        {
        console.log("Lower")        
    }

    let fourteenGuess = await ask("What is your guess? ")
    if(parseInt(fourteenGuess) === secretNumber){
        console.log(win + "It took fourteen tries")
        process.exit();
    }
    else if  (parseInt(fourteenGuess) < secretNumber )
    {
        console.log("Higher")
    }
    else 
        {
        console.log("Lower")        
    }

    let fifteenGuees = await ask("What is your guess? ")
    if(parseInt(fifteenGuees) === secretNumber){
        console.log(win + "It took fifteen tries")
        process.exit();
    }
    else if  (parseInt(fifteenGuees) < secretNumber )
    {
        console.log("Higher")
    }
    else 
        {
        console.log("Lower")        
    }

    let sixteenGuees = await ask("What is your guess? ")
    if(parseInt(sixteenGuees) === secretNumber){
        console.log(win + "It took sixteen tries")
        process.exit();
    }
    else if  (parseInt(sixteenGuees) < secretNumber )
    {
        console.log("Higher")
    }
    else 
        {
        console.log("Lower")        
    }


}