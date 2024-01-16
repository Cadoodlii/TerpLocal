import React from 'react';
import Image from './Image';
import StudentProfile from './StudentProfile';
import Experience from './Experience';

import BusinessProfile from './BusinessProfile';
import Pictures from './Pictures';

function App({isStudent}) {

      
        if(isStudent){
          return(
        <div>
      <div class = "main_container">
      <Image />
      <StudentProfile />
      </div>
      <Experience />
    </div>
        )}

        else {
        return (
          <div>
          <div class = "main_container">
            <Image />
            <BusinessProfile />
          </div>
        <Pictures />
          </div>
    )}

}

export default App;