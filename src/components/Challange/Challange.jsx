import React from "react";


export function Challange() {
  return (
    <div id="challange" style={{width: "100%", color: "#fff"}} className="card divider" >
      <span className="pin green-bg">#challange</span>
      <h3 style={{color: "#fff"}}>Испытай свои способности </h3>
      <div className="wrapper between">
        <div style={{width: "46%"}}>
          <h4>Придумай смешной стикер пак к юбилею компании</h4>
        </div>
        <div style={{width: "46%"}}>
          <h4>Прими участие в конференции HolyJS 2022</h4>
        </div>
      </div>
      <div style={{position: "relative"}}>
        <p style={{position: "absolute", top: "70%", left: "70px"}}>Получи NFT и обменяй на мерч (или курсы)</p>
        <div style={{width: "80px", height: "80px"}} className="rounded img-1"></div>
      </div>
    </div>
  );
}
