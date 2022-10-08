import React from "react";

import Nft from "../../components/Nft/Nft";
import data from "../../data/data.json";
const Marketplace = () => {
  const children = [];
  for (const { uri, price } of data.NFT) {
    children.push(
      <div>
        <Nft uri={uri} token={""} key={uri} />
        <div style={{padding: "5px", fontSize:18}}>Цена: {price}</div>
      </div>
    );
  }
  return (
      <div className="container divider">
          <h3>Собери коллекцию NFT</h3>
          <div className="wrapper p-24">

    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "16px",
      }}
    >
      {children}
    </div>
    </div>
    </div>
  );
};

export default Marketplace;
