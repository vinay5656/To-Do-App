import React, { useState } from "react";

function CrossItem(props) {
  const [isDone, setIsDone] = useState(false);
  function handleClick() {
    setIsDone((prveValue) => !prveValue);
  }
  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}

export default CrossItem;
