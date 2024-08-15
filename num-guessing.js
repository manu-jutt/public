const minnum = 50;
const maxnum = 100;
const answer = Math.floor(Math.random() * (maxnum - minnum + 1) + minnum);

let attempts = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`Guess a number b/w ${minnum} and ${maxnum}`);
    guess = Number(guess);

    if(isNaN(guess) || (guess<50 || guess>100)){
       window.alert(`please enter a number between 50 & 100`)
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert(`TOO LOW! TRY AGAIN!`);
        }
        else if(guess > answer){
            window.alert(`TOO LARGE! TRY AGAIN!`);
        }
        else{
            window.alert(`CONGRATS! YOU MANAGED TO DO IT.:) ${answer} is right. IT TOOK YOU ${attempts} attempts`);
            running = false;
        }
    }
}
