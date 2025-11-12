import React, { useState } from 'react';
import Confetti from 'react-confetti';

// An array of cute messages for the "No" button
const noButtonMessages = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Please?",
  "Don't do this to me :(",
  "I'm gonna cry...",
  "You're breaking my heart ;(",
];

interface ProposalHeaderProps {
  name: string;
}

export default function ProposalHeader({ name }: ProposalHeaderProps) {
  const [isAccepted, setIsAccepted] = useState(false);
  const [noCount, setNoCount] = useState(0);

  // As "No" is clicked, the "Yes" button gets bigger
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    // Cycle through the messages, or stick to the last one
    return noButtonMessages[Math.min(noCount, noButtonMessages.length - 1)];
  }

  return (
    <header className="proposal-header">
      {isAccepted ? (
        <>
          <Confetti width={window.innerWidth} height={window.innerHeight} />
          <div className="celebration-message">
            <h1>YAY, SHE SAID YES! 🎉</h1>
            <p>I love you so much!</p>
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