/*  
2. Random Number Generator with Delay and Progress Indication:

The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a
variable so can be modified. The program displays a message every second indicating the time remaining
until the random number is generated and then outputs the generated number. 
*/


let delay = 3; //The delay seconds
let countdown = delay;

let timer = setInterval(()=>{
    console.log(`${countdown} seconds remaining...`);
    countdown--;

    if(countdown <0){ // if the countdown has finished
        clearInterval(timer); // stop the interval
        let random = Math.floor(Math.random() * 100); // generate a random number between 0 and 99
        console.log(`Random number generated: ${random}`); // display the generated number
    }
},1000); 
