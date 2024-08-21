import React from "react";

export default Tile = ({ name, description }) => {
  return (
    <div className="tile-container">
      <p className="tile-title"> {name} </p>

      <p> {description} </p>
  {Object.values(description).map((value, index) => (
    <p key={index} className="tile"> 
        {value}
        </p>
  ))}
    </div>
  );
};
