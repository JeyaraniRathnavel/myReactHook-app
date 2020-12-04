import React, { useState } from "react";

function TwoWayBinding() {
  const [inputText, setInputText] = useState("");
  const [historyList, setHistoryList] = useState([]);

  return (
    <div>
      <p>Two way Data Binding</p>
      <input
        onChange={(e) => {
          setInputText(e.target.value);
          setHistoryList([...historyList, e.target.value]);
        }}
        placeholder="Enter Some Text"
      />
      <br />
      {inputText}
      <hr />
      <br />
      <ul>
        {historyList.map((rec, i) => {
          return <div key={i}>{rec}</div>;
        })}
      </ul>
    </div>
  );
}

export default TwoWayBinding;
