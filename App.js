import image1 from "./images/dice-01.svg";
import image2 from "./images/dice-02.svg";
import image3 from "./images/dice-03.svg";
import image4 from "./images/dice-04.svg";
import image5 from "./images/dice-05.svg";
import image6 from "./images/dice-06.svg";
import Roll from "./Components/Roll";
import Reset from "./Components/Reset";
import "./App.css";
import { useState } from "react";

function App() {
  //Here the image of the dice..
  const diceImages = [image1, image2, image3, image4, image5, image6];

  //useState => images according to random number
  const [dieImage1, setDieImage1] = useState(image1);
  const [dieImage2, setDieImage2] = useState(image3);

  //Randowm number gets from here
  const [roll1, setRollIndex1] = useState(0);
  const [roll2, setRollIndex2] = useState(0);

  //Here is the current score
  const [currentScore1, setCurrentScore1] = useState(0);
  const [currentScore2, setCurrentScore2] = useState(0);

  return (
    <div className="container">
      <h1>Dice-Game</h1>

      <div className="dice-wrapper">
        <img src={dieImage1} id="die-1" />
        <img src={dieImage2} id="die-2" />
      </div>

      <div className="para">
        <p className="p-1" id="total-1">
          Player-1 have {currentScore1}
        </p>

        <p className="p-2" id="total-2">
          Player-2 have {currentScore2}
        </p>
      </div>

      <div>
        {currentScore1 >= 25 ? (
          <p>Player-1 hav won</p>
        ) : currentScore2 >= 25 ? (
          <p>Player-2 have won</p>
        ) : null}
      </div>

      <Roll
        roll1={roll1}
        setRollIndex1={setRollIndex1}
        roll2={roll2}
        setRollIndex2={setRollIndex2}
        currentScore1={currentScore1}
        setCurrentScore1={setCurrentScore1}
        currentScore2={currentScore2}
        setCurrentScore2={setCurrentScore2}
        setDieImage1={setDieImage1}
        setDieImage2={setDieImage2}
        diceImages={diceImages}
      />
      <Reset
        setCurrentScore1={setCurrentScore1}
        setCurrentScore2={setCurrentScore2}
      />
    </div>
  );
}

export default App;
