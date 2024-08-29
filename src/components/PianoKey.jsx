// src/components/Key.js
import React, { useState } from "react";

import "./PianoKey.css";

const PianoKey = ({ note, playNote}) => {
  

  const [isPressed, setIsPressed] = useState(false); // State to track if the key is pressed

  const handleMouseDown = () => {
    setIsPressed(true); // Set key as pressed
    playNote(note); // Play the note
  };

  const handleMouseUp = () => {
    setIsPressed(false); // Set key as not pressed
  };

  return (
    <div
      className={`piano-key ${isPressed ? "pressed" : ""}`} // Add 'pressed' class if key is pressed
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // Handle case where the mouse leaves the key while pressed
    >
      <div
        className={`key ${playNote}`}
        onClick={playNote}
        role="button"
        tabIndex="0"
        onKeyDown={(e) => e.key === note[0].toLowerCase() && playNote()}
      >
        {note}
      </div>
    </div>
  );
};

export default PianoKey;
