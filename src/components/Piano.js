// src/components/Piano.js
import React from 'react';
import Key from './Key';
import './Piano.css';

const Piano = () => {
  const keys = [
    { note: 'C4', color: 'white' },
    { note: 'C#4', color: 'black' },
    { note: 'D4', color: 'white' },
    { note: 'D#4', color: 'black' },
    { note: 'E4', color: 'white' },
    { note: 'F4', color: 'white' },
    { note: 'F#4', color: 'black' },
    { note: 'G4', color: 'white' },
    { note: 'G#4', color: 'black' },
    { note: 'A4', color: 'white' },
    { note: 'A#4', color: 'black' },
    { note: 'B4', color: 'white' },
  ];

  return (
    <div className="piano">
      {keys.map((key, index) => (
        <Key key={index} note={key.note} color={key.color} />
      ))}
    </div>
  );
};

export default Piano;
