import React, { useState } from 'react';
import Navbar from './components/Navbar';
import InfoPanel from './components/InfoPanel';
import FootNav from './components/FootNav';


function App() {
  const screenConfig = useState(0);
  return (
    <div>
      <Navbar />
      <InfoPanel currentScreen={screenConfig[0]}/>
      <FootNav screenConfig={screenConfig} />
    </div>
  );
}

export default App;
