import React, { useState, useEffect } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

function DocTitleTwo() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   document.title = `Count ${count}`;
  // }, [count]);
  useDocumentTitle(count);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count Two -{count}</button>
    </div>
  );
}

export default DocTitleTwo;
