
import './App.css';
import React, { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

 const handleSubmit = (event) => {
  event.preventDefault();

  if (firstName.trim() === '' && lastName.trim() === '') {
    setErrorMessage('Please fill out this field');
    setFullName('');
  } else if (firstName.trim() === '' || lastName.trim() === '') {
    setErrorMessage('Please fill out this field');
    setFullName('');
  } else {
    setErrorMessage('');
    setFullName(`${firstName} ${lastName}`);
  }
};


  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'firstName') {
      setFirstName(value);
    } else {
      setLastName(value);
    }
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {errorMessage && <p style={{  position: "absolute",
            backgroundColor: "white",
            color: "black",
            padding: "5px 10px",
            borderRadius: "5px",
            borderColor: "black",
            borderStyle: "solid",
            borderWidth: "2px",
            fontSize: "15px",
            top: "87px",
            left: "10.6%",
            transform: "translateX(-50%)" }}>{errorMessage}</p>}
      {fullName && <p>Full Name: {fullName}</p>}
    </div>
  );
}

export default App;
