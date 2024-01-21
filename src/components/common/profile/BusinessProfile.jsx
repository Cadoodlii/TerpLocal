import "./Profile.css";
import React, { useState } from "react";

function BusinessProfile() {
  //initializing and declaring useStates
  const [inputName, setInputName] = useState("Company ABC");
  const [inputDate, setDate] = useState("1/1/2000");
  const [inputMission, setMission] = useState("Make the world a better place!");

  const handleName = (event) => setInputName(event.target.value);
  const handleDate = (event) => setDate(event.target.value);
  const handleMission = (event) => setMission(event.target.value);

  return (
    <div class="general_info_business">
      <label htmlFor="textInput">Name: </label>
      <input
        class="general_info_input"
        type="text"
        id="textInput"
        value={inputName}
        onChange={handleName}
      />

      <label htmlFor="textInput">Date: </label>
      <input
        class="general_info_input"
        type="text"
        id="textInput"
        value={inputDate}
        onChange={handleDate}
      />

      <label htmlFor="textInput">Mission: </label>
      <input
        class="general_info_input"
        type="text"
        id="textInput"
        value={inputMission}
        onChange={handleMission}
      />
    </div>
  );
}

export default BusinessProfile;
