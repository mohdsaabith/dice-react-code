import React from "react";

const Reset = ({
  
  setCurrentScore1,
  setCurrentScore2,
 
}) => {
  //When we click the reset button. here the player-1 score turn 0
  function currentScorePlayer1() {
    setCurrentScore1(0);
  }

  //Here the player-2 score turn 0, When we click reset button.
  function currentScorePlayer2() {
    setCurrentScore2(0);
  }

  //To reset the current score is called here
  const resetBtn = () => {
    currentScorePlayer1();
    currentScorePlayer2();
  };

  return (
    <div>
      <button onClick={resetBtn}>Reset</button>
    </div>
  );
};

export default Reset;
