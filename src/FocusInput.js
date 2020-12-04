import React, { useEffect, useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {}, []);
  return (
    <div>
      <input type="text" />
    </div>
  );
}

export default FocusInput;
