    //global var declarations
    let playerwins = 0;
    let compwins = 0;
    //This function randomly returns Rock Paper or Scissors as part of the computer playing 
    function computerPlay(){
        //Get a randnum between 0 and 3
        const randnum = Math.random() * 3;
        //Rock
        if (randnum >= 0 && randnum < 1){
            return "rock";
        }
        //Paper
        else if (randnum >= 1 && randnum < 2){
            return "paper";
        }
        //Scissors
        else{
            return "scissors";
        }
    }
    //This function takes paramters playerSelection and computerSelection and returns the winner of the round as a string
    function playRound(e){
        const interm = document.querySelector(`button[id=${e.target.textContent}]`);
        const playerSelection = interm.value;
        const computerSelection = computerPlay();
        const numwins = document.querySelector(".wins");
        const numloss = document.querySelector(".losses");
        const finalscore = document.querySelector(".final");
        finalscore.textContent = '';
        switch(true){
            case (playerSelection == computerSelection):    //tie
                playerwins++;
                compwins++;
                numwins.textContent=`Wins: ${playerwins}`;
                numloss.textContent=`Losses: ${compwins}`;
                break;
            case (playerSelection == "rock" && computerSelection == "paper"): //loss
                compwins++;
                numloss.textContent=`Losses: ${compwins}`;
                break;
            case (playerSelection == "rock" && computerSelection == "scissors"): //win
                playerwins++;
                numwins.textContent=`Wins: ${playerwins}`;
                break;
            case (playerSelection =="paper" && computerSelection == "rock"): //win
                playerwins++;
                numwins.textContent=`Wins: ${playerwins}`;
                break;   
            case (playerSelection =="paper" && computerSelection == "scissors"): //loss
                compwins++;
                numloss.textContent=`Losses: ${compwins}`;
                break;
            case (playerSelection =="scissors" && computerSelection == "rock"): //loss
                compwins++;
                numloss.textContent=`Losses: ${compwins}`;
                break;
            case (playerSelection =="scissors" && computerSelection == "paper"): //win
                playerwins++
                numwins.textContent=`Wins:${playerwins}`;
                break;
        }
        if (playerwins >= 5){
            //disp player
            playerwins = 0;
            compwins = 0;
            finalscore.textContent = "You win the game!";
                                                                            //maybe call a function that clears the board
        } else if (compwins >= 5){
            //computer wins
            playerwins = 0;
            compwins = 0;
            finalscore.textContent = "You lose the game!";
        }
        return;
        //need to make a reset function
    }

    function clearboard(){
        const winsreset = document.querySelector(".wins");
        const lossreset = document.querySelector(".losses");
        const finalreset = document.querySelector(".final");
        finalreset.textContent = '';
        lossreset.textContent = 'Losses: ';
        winsreset.textContent = 'Wins: ';
        return;
    }
    
    const userbtns = document.getElementById('btngrp');
    const resetbtn = document.getElementById('resetbutton');
    userbtns.addEventListener('click', playRound);
    resetbtn.addEventListener('click', clearboard);
    
