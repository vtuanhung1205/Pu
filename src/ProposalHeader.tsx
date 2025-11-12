// Make sure to import React, useState, and Confetti as before
import React, { useState } from 'react';
import Confetti from 'react-confetti';
// 1. Import your special celebration photo
import celebrationPhoto from '../public/our-photo.jpeg';

const noButtonMessages = [
  "No", "Are you sure?", "Really sure?", "Please?",
  "Don't do this to me :(", "I'm gonna cry...", "You're breaking my heart ;(",
];

export default function ProposalHeader({ name }: { name: string }) {
  const [isAccepted, setIsAccepted] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return noButtonMessages[Math.min(noCount, noButtonMessages.length - 1)];
  }

  return (
    <header className="proposal-header">
      {isAccepted ? (
        <>
          <Confetti width={window.innerWidth} height={window.innerHeight} />
          {/* 2. This is the new, more personal "Yes" screen */}
          <div className="celebration-message">
            <h1>YAY, SHE SAID YES!</h1>
            <img src={celebrationPhoto} alt="Celebration" className="celebration-photo" />
            <h2>I can't wait to spend forever with you.</h2>
            <p>I love you more than words can say!</p>
          </div>
        </>
      ) : (
        <>
          <h1>{name}</h1>
          <h2>Will you be my girl?</h2>
          <div className="button-container">
            <button
              className="yes-button"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setIsAccepted(true)}
            >
              Yes
            </button>
            <button className="no-button" onClick={handleNoClick}>
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </header>
  );
}