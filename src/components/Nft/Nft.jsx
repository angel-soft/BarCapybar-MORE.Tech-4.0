import React from "react";

const Nft = ({ uri, token }) => {
  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        backgroundPositionX: "center",
        backgroundPositionY: "center",
          backgroundRepeat:"no-repeat",
          backgroundSize: "cover",
        backgroundImage: `url(${uri})`,
          borderWidth: '2px',
          borderRadius: '1px',
          borderStyle: "solid",
          borderColor: "rgba(0,0,0,0.25)"
      }}
    />
  );
};

export default Nft;
