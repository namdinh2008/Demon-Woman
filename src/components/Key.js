// src/components/Key.js
import React from 'react';
import * as Tone from 'tone';
import './Key.css';

const Key = ({ note, color }) => {
  const synth = new Tone.Synth().toDestination();

  const playSound = () => {
    synth.triggerAttackRelease(note, "8n");
  };

  return (
    <div
      className={`key ${color}`}
      onClick={playSound}
      role="button"
      tabIndex="0"
      onKeyDown={(e) => e.key === note[0].toLowerCase() && playSound()}
    >
      {note}
    </div>
  );
};

export default Key;
