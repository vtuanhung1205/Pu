// Make sure to import React, useState, and Confetti as before
import React, { useState } from 'react';
import Confetti from 'react-confetti';
// 1. Import your special celebration photo
import celebrationPhoto from '../public/our-photo.jpeg';

const noButtonMessages = [
  "No", "Thiệt á hở?", "chắc không rứa?", "RIU?",
  "BÀ DỠN MÀ HẢ", "THIỆT LUÔNNN!!!?", "BUỒN:(",
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
            <h1>YAY, CẢM ƠN GÁI ĐẸP!</h1>
            <img src={celebrationPhoto} alt="Celebration" className="celebration-photo" />
            <h2>Hans sẽ tặng em một BÁT BẢO NGÔ GIA bất kì khi nào nhé!!</h2>
            <p>YÊU BÉ UYÊN NHIỀUUUUUUUUUUUUU!!!!</p>
          </div>
        </>
      ) : (
        <>
          <h1>{name}</h1>
          <h2>Đồng ý làm người yêu em nhe!!</h2>
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