// Piano.jsx

import React from 'react';
import PianoKey from './PianoKey';

const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B']; // Example notes array

const Piano = () => {
  const playNote = (note) => {
    // Add logic to play the note using Tone.js or another library
    console.log(`Playing note: ${note}`);
  };

  return (
    <div className="piano">
      {notes.map((note) => (
        <PianoKey key={note} note={note} playNote={playNote} />
      ))}
    </div>
  );
};

export default Piano;
