import React, { useRef } from "react";

// const imageRef = useRef(null);

const Imageonmouseover = ({ primaryImg, secondaryImg }) => {
  return (
    <div>
      <img
        // onMouseOver={() => {
        //   imageRef.current.src = secondaryImg;
        // }}
        // onMouseOut={() => {
        //   imageRef.current.src = primaryImg;
        // }}
        src={primaryImg}
        alt=""
        // ref={imageRef}
      />
    </div>
  );
};

export default Imageonmouseover;
