import React, { useState } from "react";

function BandInput({ onBandSubmit }) {
  const [name, setName] = useState("");
  function onTextChange(event) {
    setName(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    onBandSubmit(name);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          name
          <input type="text" value={name} onChange={onTextChange} />
        </label>
        <input type="submit" value="add band" />
      </form>
    </div>
  );
}

export default BandInput;
