import React from 'react';
import Image from './Image';
import Profile from './Profile';
import Experience from './Experience';

function App() {
  return (
    <div>
      <div class = "main_container">
      <Image />
      <Profile />
      </div>
      <Experience />
    </div>
  );
}

export default App;