// Piano.jsx
import * as Tone from "tone";
import React from 'react';
import PianoKey from './PianoKey';

const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B']; // Example notes array

const Piano = () => {
  const playNote = (note) => {
    // Ensure the note is in the correct format, e.g., "C4", "D#3", etc.
    const noteWithOctave = `${note}4`; // Defaulting to octave 4, adjust as needed

    try {
      const synth = new Tone.Synth().toDestination(); // Create a synth instance
      synth.triggerAttackRelease(noteWithOctave, "8n"); // Use the note with octave
    } catch (error) {
      console.error("Error playing note:", error);
    }
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
