import { useState } from "react";

const KeyboardClipboard = () => {
  const [inputValue, setInputValue] = useState("");
  const handleKeyDown = (e) => {
    // console.log(e.keyCode);
    e.target.value = e.target.value.toUpperCase();
    if (e.keyCode === 13) {
      alert("Entra basildi")
    }
  };
  return (
    <div className="container text-center">
      <h2>CLIPBOARD EVETNS</h2>
      <input
        type="text"
        name=""
        id=""
        value={inputValue}
        onKeyDown={handleKeyDown}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p className="text-start m-4">{inputValue}</p>
    </div>
  );
};

export default KeyboardClipboard;
