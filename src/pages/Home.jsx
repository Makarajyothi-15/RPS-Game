import React, { useState } from "react";
import ChoiceButtons from "../components/ChoiceButtons";
import Result from "../components/Result";
import Winner from "../components/Winner";

const choices = ["Rock", "Paper", "Scissors"];

const Home = () => {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [winner, setWinner] = useState("");

  const handlePlayerChoice = (choice) => {
    const compChoice = choices[Math.floor(Math.random() * 3)];
    setPlayerChoice(choice);
    setComputerChoice(compChoice);
    determineWinner(choice, compChoice);
  };

  const determineWinner = (player, computer) => {
    if (player === computer) {
      setResult("It's a Draw!");
    } 
    
    else if (
      (player === "Rock" && computer === "Scissors") ||
      (player === "Paper" && computer === "Rock") ||
      (player === "Scissors" && computer === "Paper")
    ) 
    
    {
      const newScore = playerScore + 1;
      setPlayerScore(newScore);
      setResult("You Win! ");
      
      
      if (newScore === 10) setWinner("🎉 You Won the Game!");
    } else {
      const newScore = computerScore + 1;
      setComputerScore(newScore);
      setResult("Computer Wins! ");
      
      if (newScore === 10) setWinner(" Computer Won the Game!");
    }
  };

  const resetGame = () => {

    setPlayerChoice("");
    setComputerChoice("");
    setResult("");
    setPlayerScore(0);
    setComputerScore(0);
    setWinner("");
  };

  return (
    <div className="text-center flex flex-col justify-center items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mt-8 mb-8">Rock Paper Scissors Game</h1>
       <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg mt-6 mx-auto space-y-6">
      <ChoiceButtons 
        choices={choices} 
        onChoice={handlePlayerChoice} 
        disabled={winner !== ""} 
      />
      
      <Result 
        playerChoice={playerChoice} 
        computerChoice={computerChoice} 
        result={result} 
        playerScore={playerScore} 
        computerScore={computerScore} 
      />
      
      {winner && (
        <Winner winner={winner} onReset={resetGame} />
      )}
      </div>
    </div>
  );
};

export default Home;