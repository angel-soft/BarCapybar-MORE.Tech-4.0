import React from "react";

export function Course({ title, uri, price, bgColor }) {

  return (
    <div className="card" style={{
      position: "relative",
      flexDirection: "row",
      flexWrap: "wrap",
      gap: "16px",
    }}>
      <h3>{title}</h3>
      <div style={{padding: "5px", fontSize:18}}>Цена: {price}</div>
      <div
      style={{
        position: "absolute",
        bottom: "4px",
        right: "4px",
      }}>
        <div
        style={{
        position: "absolute",
        bottom: "4px",
        right: "4px",
        width: "80px",
        height: "60px",
        background: bgColor,
        backgroundPositionX: "center",
        backgroundPositionY: "center",
        backgroundRepeat:"no-repeat",
        backgroundSize: "cover",
        backgroundImage: `url(${uri})`,
        borderWidth: '2px',
        borderRadius: '4px',
      }}
    />
      </div>
    </div>
  );
}
