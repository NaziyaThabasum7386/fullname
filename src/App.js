
import './App.css';
import { useState } from "react";

export default function App() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [fullname, setFullname] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);

  const handle = (e) => {
    e.preventDefault();
    if (firstname && lastname !== "") {
      setFullname(firstname + " " + lastname);
      setShowTooltip(false); // Clear error if both fields are filled
    } else {
      setFullname(" ");
      setShowTooltip(true);
    }
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <h3>
        First Name:{" "}
        <input
          vlaue={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
      </h3>
      <h3>
        Last Name:{" "}
        <input value={lastname} onChange={(e) => setLastname(e.target.value)} />
      </h3>
      <form onSubmit={handle}>
        <button type="submit">Submit</button>
      </form>
      <h3> full name: {fullname}</h3>
      {showTooltip && (
        <div
          style={{
            position: "absolute",
            backgroundColor: "white",
            color: "black",
            padding: "5px 10px",
            borderRadius: "5px",
            borderColor: "black",
            borderStyle: "solid",
            borderWidth: "2px",
            fontSize: "15px",
            top: "103px",
            left: "29%",
            transform: "translateX(-50%)",
          }}
        >
          Please fill out this field
        </div>
      )}
    </div>
  );
}
