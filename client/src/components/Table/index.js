import React from "react";

const SVG = ({
    style = {},
    fill = "#000",
    width = "100%",
    className = "",
    viewBox = "0 0 32 32"
  }) => (
    <svg
      width={width}
      style={style}
      height={width}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      className='circle'
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <circle  cx="10" cy="20" r="5" stroke="black" strokeWidth=".25" fill="#B40202" id="table2" />
    </svg>
  );
  
  export default SVG;