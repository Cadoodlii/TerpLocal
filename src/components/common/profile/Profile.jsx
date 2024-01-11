import React, { useState } from 'react';
import "../page-title/PageTitle.css"

function Profile () {

    const PFP = () => {
        const [PFP, setPFP] = useState("https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*");
      
        const PFPChange = (event) => {
          const file = event.target.files[0];
      
          if (file) {
            // Use FileReader to read the selected image
            const reader = new FileReader();
            reader.onload = () => {
              setPFP(reader.result);
            };
            reader.readAsDataURL(file);
          }
        };
      
        return (
          <div>
            <input type="file" accept="image/*" onChange={PFPChange} />
            {PFP && (
              <div>
                <p>Preview:</p>
                <img src={PFP} alt="Selected" style={{ maxWidth: '100%', maxHeight: '300px' }} />
              </div>
            )}
          </div>
        );
      };
      
}





export default Profile;