import React, { useRef, useState } from "react";

function UseRef() {
  const [value, setValue] = useState(0);

  const inputOne = useRef()
  const inputTwo = useRef();

  const getNumBox = () => {
    console.log("Num box")
    inputOne.current.style.backgroundColor = "red";
  }

  const getTextBox = () => {
    console.log("Text box")
  }

  return (
    <div>
      <h1>Learn UseRef</h1>
      <input
      ref={inputOne}
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <input type="text" value={value} 
        onChange={(e) => setValue(e.target.value)}
      
      />

      <h3>Value is : {value}</h3>

      <button onClick={() => getNumBox()}>Rupees</button>
      <button onClick={() => getTextBox()}>Dollars</button>

    </div>
  );
}

export default UseRef;
