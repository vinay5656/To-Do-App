import React from "react";
import CrossItem from "./CrossItem";

function App() {
  const [item, setItem] = React.useState("");
  const [list, setList] = React.useState([]);

  function handleChange(event) {
    setItem(event.target.value);
  }
  function addHandle() {
    setList((prevList) => {
      return [...prevList, item];
    });
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={item} />
        <button onClick={addHandle}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((itm, index) => (
            <CrossItem key={index} text={itm} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
