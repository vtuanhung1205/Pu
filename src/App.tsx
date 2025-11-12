import React from 'react';
import ProposalHeader from './ProposalHeader';
import MemorySection from './MemorySection';
import ReasonsSection from './ReasonsSection';
import AnimatedBackground from './AnimatedBackground';
import './App.css'; // We will create this file for styling

function App() {
  return (
    <div className="App">
       <AnimatedBackground />
      {/* Pass her name as a prop! */}
      <ProposalHeader name="Pu" /> 
      
      <div className="content-wrapper">
        <MemorySection />
        <ReasonsSection />
      </div>
    </div>
  );
}

export default App;