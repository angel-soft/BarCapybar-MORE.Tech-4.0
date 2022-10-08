import React from "react";
import { useSelector } from "react-redux";
import { WalletBalance } from "../../components/WalletBalance/WalletBalance";
import { Transfer } from "../../components/Transfer/Transfer";
import { History } from "../../components/History/History";
import { Challange } from "../../components/Challange/Challange";

import "./Profile.css";

export function Profile() {
  const user = useSelector((state) => state.root.user);

  return (
    <>
      <div className="container divider">
        <div className="wrapper p-24 between">
          <div className="info">
            <h1>{user.name}</h1>
            <h3>{user.login}</h3>
            <Challange />
            <History />
          </div>
         <div>
            <div className="sidebar">
              <WalletBalance />
              <Transfer />
          </div>
         </div>
        </div>
      </div>
    </>
  );
}
