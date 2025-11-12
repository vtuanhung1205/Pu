import React from 'react';
import ourPhoto from '../public/our-photo.jpeg'; // <-- ADD YOUR PHOTO HERE

export default function MemorySection() {
  return (
    <div className="content-section">
      <h3>Our Favorite Memory</h3>
      <img src={ourPhoto} alt="Our favorite memory" className="memory-photo" />
      <p>This was the day I knew I wanted to spend my life with you.</p>
    </div>
  );
}