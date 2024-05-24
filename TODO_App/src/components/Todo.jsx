import React from "react";
import logo from "../assets/logo.png";

export default function Todo() {
  return (
    <>
      <div className="container-fluid">
        <div>
          <figure style={{textAlign: 'center' }}>
            <img src={logo} alt="Logo" />
            <figcaption><h1>Add your list here!</h1></figcaption>
          </figure>

          <div style={{textAlign: 'center' }}>
            <input type="text" style={{width: '300px', height: '20px'}}/>
            <button style={{ fontSize: '17px'}}>Add</button>
          </div>
        </div>
      </div>
    </>
  );
}
