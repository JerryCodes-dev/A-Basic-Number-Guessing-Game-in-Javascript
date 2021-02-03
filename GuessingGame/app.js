let secret_number = Math.trunc(Math.random()*10 + 1);

let score = 10;
let highscore = 0;
document.querySelector('.number').textContent = secret_number;
document.querySelector('.score').textContent ;



function clickMe(){
    
    let guess = Number(document.querySelector('.guess').value) ;
       if(!guess){
        document.querySelector('.message').textContent =`NO GUESS VALUE`
        }
       else if(guess == secret_number){
        document.querySelector('.message').textContent = "You Got It Right";
        document.querySelector('body').style.backgroundColor = "green";
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        
       }
       else if(guess !== secret_number){
           if(score > 1){
            document.querySelector('.message').textContent = guess > secret_number ? `Your Guess is Higher than secret number (${secret_number})`:`Your Guess is Lesser than secret number (${secret_number})`;
            score--;
            document.querySelector('.score').textContent = score;
           }
           else{
            document.querySelector('.message').textContent = 'You LOST ';
            document.querySelector('.score').textContent = 0;
           }
         }
    
       
}

function init(){
    let secret_number = Math.trunc(Math.random()*10 + 1);

    score = 10;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').value = secret_number;
    document.querySelector('.message').textContent = "Start Guessing...";
    document.querySelector('body').style.backgroundColor = "white";
    document.querySelector('.score').textContent = score;
    


}

document.querySelector('.again').addEventListener('click', init)
document.querySelector('.check').addEventListener('click', clickMe)

    


