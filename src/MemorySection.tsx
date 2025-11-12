import React, { useState, useEffect } from 'react';
// 1. Import all your photos
import photo1 from '../public/photo1.jpeg';
import photo2 from '../public/photo2.jpeg';
import photo3 from '../public/photo3.jpg';

const memories = [
  {
    image: photo1,
    caption: "The day we first met. I was so nervous!",
  },
  {
    image: photo2,
    caption: "Our first big adventure together.",
  },
  {
    image: photo3,
    caption: "This was the moment I knew I wanted to spend my life with you.",
  },
];

export default function MemorySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 2. This effect will cycle through the photos every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % memories.length);
    }, 4000); // 4000ms = 4 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="content-section">
      <h3>Our Favorite Memories</h3>
      <div className="slideshow-container">
        {memories.map((memory, index) => (
          <img
            key={index}
            src={memory.image}
            alt="Our favorite memory"
            // 3. The 'active' class creates the fade effect
            className={`memory-photo ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
      <p className="caption">{memories[currentIndex].caption}</p>
    </div>
  );
}