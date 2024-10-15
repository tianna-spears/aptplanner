import React from "react";

export const TileList = ( { tiles } ) => {
  return (
    <div>
      {tiles.map((tile, index) => (
        <tile
        key={index}
        name={tile.name}
        description={tile.description}
      />
      ))}
    </div>
  );
};