import React from "react";
import { useSelector } from "react-redux";
import { WalletBalance } from "../../components/WalletBalance/WalletBalance";

import "./Profile.css";

export function Profile() {
  const user = useSelector((state) => state.root.user);
  
  return (
    <>
    <div className="container">
      <div className="rows center">
        <div className="info">
          <h1>{user.name}</h1>
          <h3>{user.login}</h3>
        </div>
        <div className="info">
          <WalletBalance />
        </div>
      </div>
    </div>
    </>
  );
}

