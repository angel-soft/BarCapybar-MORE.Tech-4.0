import React, { useEffect } from "react";

import { walletBalanceRequest } from "../../redux/actions/apiActions";
import { useDispatch, useSelector } from "react-redux";

import "./WalletBalance.css";

export function WalletBalance() {

  const dispatch = useDispatch();

  const { wallet } = useSelector((state) => state.root.user);

  const { publicKey } = wallet;

  useEffect(() => {
    if(publicKey) {
      dispatch(walletBalanceRequest({ publicKey }));
    }
  }, [dispatch, publicKey]);

  return (
    <div className="cardInfo">
      <h3>Баланс кошелка</h3>
      <br />
      <p>Монеты</p>
      <div className="wrapper between">
        <h4>{wallet?.maticAmount ?? 0} M</h4>
        <div>
          <p className="green">{Math.round(wallet?.maticAmount * 0.4)} M  за месяц</p>
        </div>
      </div>
      <br />
      <p>Рубли</p>
      <div className="wrapper between">
        <h4>{wallet?.coinsAmount ?? 0} руб</h4>
        <div>
          <p className="green">{Math.round(wallet?.coinsAmount * 0.13)} руб за месяц</p>
        </div>
      </div>
    </div>
  );
}
