import React, { useState } from "react";

import Nft from "../../components/Nft/Nft";
import { Course } from "./Course";
import data from "../../data/data.json";

const Marketplace = () => {

  const types = ["Мерч", "Курсы", "NFT"];
  const [type, setType] = useState(types[0]);

  const setNFT = () => {
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
      <>
          <h3>Собери коллекцию NFT</h3>
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
      </>
    );
  }

  const setCourses = () => {
    const children = [];
    for (const { uri, price, title, bgColor } of data.courses) {
      children.push(
          <Course uri={uri} title={title} price={price} key={title} bgColor={bgColor} />
      );
    }

    return (
      <>
      <br />
          <h3>Все программы обучения</h3>
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
      </>
    );
  }

  const setMerch = () => {
    const children = [];
    for (const { uri, price } of data.merch) {
      children.push(
          <div key={uri+price}>
        <div
          style={{
          width: "300px",
          height: "300px",
          backgroundPositionX: "center",
          backgroundPositionY: "center",
          backgroundRepeat:"no-repeat",
          backgroundSize: "contain",
          backgroundImage: `url(${uri})`,
          borderWidth: '2px',
          borderRadius: '4px',
        }}
       /> 
       <div style={{padding: "5px", fontSize:18}}>Цена: {price}</div>
      </div>
      );
    }

    return (
      <>
      <br />
          <h3>Мерч</h3>
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
      </>
    );
  }

  let content;

  switch(type) {
    case "Мерч": {
      content = setMerch();
      break
    }
    case "Курсы": {
      content = setCourses();
      break
    }
    case "NFT": {
      content = setNFT();
      break
    }
    default: {
      return null
    }
  }
  return (
      <div className="container divider p-24">
        <div className="wrapper">
        {types.map((elem) =>
          elem === type ? (
            <div style={{
              width: "160px"
            }} className="pin green-bg"><h4>{elem}</h4></div>
          ) : (
            <div style={{ width: "160px"}}
              className="pin pointer"
              onClick={() => setType(elem)}
            >
              <h4>{elem}</h4>
            </div>
          )
        )}
        </div>
          {content}
    </div>
  );
};

export default Marketplace;
