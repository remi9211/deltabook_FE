import React, { useState } from 'react'
import '../stylesheet/RockPaperScissor.css'

function RockPaperScissor() {
    const [result, setResult] =useState('');
    const choices = ['Rock', 'Paper', 'Scissor'];
    var computerChoice;
    //Showing result and alert
    const showresult = (userChoice, computerChoice, finalresult)=>{
        setResult(<p>
            You chose: <strong><em>{userChoice}</em></strong> & Player 2 chose: <strong><em>{computerChoice}</em><br/>{finalresult}!</strong></p>);        
        setTimeout(function() {
            if (window.confirm(finalresult+"! Wanna Play Again?")){
                window.location.reload();
            }else{
                window.location.reload();
            }
        }, 100);     
    }
    //Check for winner
    const handleClick = (userChoice) =>{
        computerChoice = choices[Math.floor(Math.random() * choices.length)];
        //Check for Draw
        if(userChoice == computerChoice)
            showresult(userChoice, computerChoice, "It's a Draw")
        //If user select Rock
        else if(userChoice == "Rock"){
            if(computerChoice == "Paper")
                showresult(userChoice, computerChoice, "You Loss")
            else if(computerChoice == "Scissor")
                showresult(userChoice, computerChoice, "You Win")
        }
        //If user select Paper        
        else if(userChoice == "Paper"){
            if(computerChoice == "Rock")
                showresult(userChoice, computerChoice, "You Win")
            else if(computerChoice == "Scissor")
                showresult(userChoice, computerChoice, "You Loss")
        }
        //If user select Scissor
        else if(userChoice == "Scissor"){
            if(computerChoice == "Paper")
                showresult(userChoice, computerChoice, "You Win")
            else if(computerChoice == "Rock")
                showresult(userChoice, computerChoice, "You Loss")
        }
    }
  return (
    <div>
        <div className="RockPaperScissor">
            <h1 className='title' >Rock Paper Scissor</h1>
            <div className="emoji">
                <img src="https://symbl-world.akamaized.net/i/webp/6f/ecfa5d090545975ed83e10dc5a2500.webp" alt="Emoji" />
                <img src="https://symbl-world.akamaized.net/i/webp/9b/79fcecb75f58320c1c146075a31779.webp" alt="Emoji" />
            </div>        
            <h1>Let's Play!</h1>
            <p>Choose Your Option..</p>
            <div className="container1">
                <button onClick={() => handleClick("Rock")}>Rock</button>
                <button onClick={() => handleClick("Paper")}>Paper</button>
                <button onClick={() => handleClick("Scissor")}>Scissor</button>
            </div>
            <div id="result">{result}</div>
        </div>
    </div>
  )
}
export default RockPaperScissor;