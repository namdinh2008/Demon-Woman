// PianoKey.jsx (example component for a single piano key)

import React, { useState } from "react";
import "./PianoKey.css"; // Add CSS for visual feedback

const PianoKey = ({ note, playNote }) => {
  const [isPressed, setIsPressed] = useState(false); // State to track if the key is pressed

  const handleMouseDown = () => {
    setIsPressed(true); // Set key as pressed
    playNote(note); // Play the note
  };

  const handleMouseUp = () => {
    setIsPressed(false); // Set key as not pressed
  };

  const handleTouchStart = () => {
    setIsPressed(true);
    playNote(note);
  };

  const handleTouchEnd = () => {
    setIsPressed(false);
  };

  return (
    <div
      className={`piano-key ${isPressed ? "pressed" : ""}`} // Add 'pressed' class if key is pressed
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // Handle case where the mouse leaves the key while pressed
      onTouchStart={handleTouchStart} // Handle touch start
      onTouchEnd={handleTouchEnd} // Handle touch end
    >
      {/* Key content */}
    </div>
  );
};

export default PianoKey;
