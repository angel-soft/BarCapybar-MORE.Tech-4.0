import React, { useEffect } from "react";

import { walletBalanceRequest } from "../../redux/actions/apiActions";
import { useDispatch, useSelector } from "react-redux";

import "./WalletBalance.css";

export function WalletBalance() {

  const dispatch = useDispatch();

  const user = useSelector((state) => state.root.user);

  const { wallet } = user;

  useEffect(() => {
    if(wallet) {
      const { publicKey } = wallet;
      dispatch(walletBalanceRequest({ publicKey }));
    }
  }, [dispatch, wallet]);

  return (
    <div className="cardInfo">
      <h3>Баланс кошелка</h3>
      <br />
      <p>Монеты</p>
      <h4>{wallet?.maticAmount ? wallet?.maticAmount : "0 M"}</h4>
      <br />
      <p>Рубли</p>
      <h4>{wallet?.coinsAmount ? wallet?.coinsAmount : "0 руб"}</h4>
    </div>
  );
}