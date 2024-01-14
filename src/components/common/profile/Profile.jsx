import './Profile.css';
import React, { useState } from 'react';

function Profile() {

//initializing and declaring useStates
const [inputName, setInputName] = useState('John Doe');
const [inputEmail, setInputEmail] = useState('JohnDoe@gmail.com');
const [inputMajor, setInputMajor] = useState('Computer Science');
const [inputYear, setInputYear] = useState('Junior');

const handleName = (event) => setInputName(event.target.value);
const handleEmail = (event) => setInputEmail(event.target.value);
const handleMajor = (event) => setInputMajor(event.target.value);
const handleYear = (event) => setInputYear(event.target.value);

return (
<div class = "general_info">

<label htmlFor="textInput">Name: </label>
<input
class = "general_info_input"
  type="text"
  id="textInput"
  value={inputName}
  onChange={handleName}
/>


<br />

<label htmlFor="textInput">Email: </label>
<input
class = "general_info_input"
  type="text"
  id="textInput"
  value={inputEmail}
  onChange={handleEmail}
/>


<br />

<label htmlFor="textInput">Major: </label>
<input
class = "general_info_input"
  type="text"
  id="textInput"
  value={inputMajor}
  onChange={handleMajor}
/>

<br />

<label htmlFor="textInput">Year: </label>
<input
class = "general_info_input"
  type="text"
  id="textInput"
  value={inputYear}
  onChange={handleYear}
/>
</div>
);

}

export default Profile;