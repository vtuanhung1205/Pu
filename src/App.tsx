import React, { useState, useEffect } from "react";
import ProposalHeader from "./ProposalHeader";
import MemorySection from "./MemorySection";
import ReasonsSection from "./ReasonsSection";
import AnimatedBackground from "./AnimatedBackground";
import LoadingScreen from "./LoadingScreen";
import "./App.css"; // We will create this file for styling

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // 4000ms = 4 seconds

    // Cleanup function to prevent memory leaks
    return () => clearTimeout(timer);
  }, []); // The empty array ensures this effect runs only once

  return (
    <div className="App">
      <LoadingScreen name="Pu" isLoading={isLoading} />

      <AnimatedBackground />
  
      <ProposalHeader name="Pu" />

      <div className="content-wrapper">
        <MemorySection />
        <ReasonsSection />
      </div>
    </div>
  );
}

export default App;
