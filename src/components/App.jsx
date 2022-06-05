import React, {useState} from "react";

function App() {

  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    // const newValue = event.target.value;
    // const inputName = event.target.name;  //line 11/12 replaced by line 14 for destructuring

    const {value, name} = event.target

    setFullName(preValue => {
      // if (inputName === "fName") {  //replaced by be low line for destructuring
      if (name === "fName") {  
        return {
          fName: value,
          lName: preValue.lName
        }
      // } else if (inputName === "lName") {
      } else if (name === "lName") {
  
        return {
          fName: preValue.fName,
          lName: value
        }
      }
    });
  }

  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input 
          name="fName"
          onChange={handleChange}
          placeholder="First Name" 
          value={fullName.fName}
        />
        <input 
          name="lName"
          onChange={handleChange}
          placeholder="Last Name" 
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
