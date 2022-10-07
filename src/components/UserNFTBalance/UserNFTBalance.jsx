import React, { useEffect } from "react";
import { walletNftBalanceRequest } from "../../redux/actions/apiActions";
import { useDispatch, useSelector } from "react-redux";

import "./UserNFTBalance.css";

export function UserNFTBalance({ id }) {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.root.users);
  const user = users.find((user) => user.id === id);
  const {
    name,
    login,
    wallet: { publicKey },
    nftbalance,
  } = user;

  useEffect(() => {
    dispatch(walletNftBalanceRequest({ publicKey }));
  }, [dispatch, publicKey]);

  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{login}</p>
      <br />
      <h3>{nftbalance}</h3>
    </div>
  );
}
