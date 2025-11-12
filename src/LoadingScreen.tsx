import React from 'react';

// Define the props the component will accept
interface LoadingScreenProps {
  name: string;
  isLoading: boolean;
}

export default function LoadingScreen({ name, isLoading }: LoadingScreenProps) {
  return (
    // The 'hidden' class will be added when isLoading becomes false, triggering the fade-out
    <div className={`loading-screen ${!isLoading ? 'hidden' : ''}`}>
      <div className="loading-content">
        <span className="fade-in-text">Hello Bé</span>
        <span className="fade-in-text name">{name}</span>
        <div className="heart-animation"></div>
      </div>
    </div>
  );
}