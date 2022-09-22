import React, { useState } from "react";

export const Roll = ({
  currentScore1,
  setCurrentScore1,
  setCurrentScore2,
  currentScore2,
  setDieImage1,
  setDieImage2,
  diceImages,
  roll1,
  roll2,
  setRollIndex1,
  setRollIndex2,
}) => {
  //here the dice1 and the random number1 is generated
  const rollDice1 = () => {
    setRollIndex1(Math.floor(Math.random() * 6));
  };

  //here the dice1 and the random number2 is generated
  const rollDice2 = () => {
    setRollIndex2(Math.floor(Math.random() * 6));
  };

  //Here is the current score1 for player-1 is generated.
  function currentScorePlayer1() {
    setCurrentScore1(currentScore1 + (roll1 + 1));
  }

  //here is the current score for player-2 is generated.
  function currentScorePlayer2() {
    setCurrentScore2(currentScore2 + (roll2 + 1));
  }

  //Here the image generate according to the random number is generate for player-1
  function imageRoll1() {
    setDieImage1(diceImages[roll1]);
  }

  //Here the image generate according to the random number is generate for player-1
  function imageRoll2() {
    setDieImage2(diceImages[roll2]);
  }

  //This is the function..When we click the button roll then all this function will run.
  const btnRoll = () => {
    rollDice1();
    rollDice2();
    currentScorePlayer1();
    currentScorePlayer2();
    imageRoll1();
    imageRoll2();
  };

  return (
    <>
      <button onClick={btnRoll}>Roll the dice</button>
    </>
  );
};

export default Roll;
