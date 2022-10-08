import React, { useEffect } from "react";

import { walletHistoryRequest } from "../../redux/actions/apiActions";
import { useDispatch, useSelector } from "react-redux";

// import "./WalletBalance.css";

export function History() {

  const dispatch = useDispatch();

  const { wallet, history } = useSelector((state) => state.root.user);

  const { publicKey } = wallet;

  useEffect(() => {
    if(publicKey) {
      dispatch(walletHistoryRequest({ publicKey }));
    }
  }, [dispatch, publicKey]);

  return (
    <div className="divider">
      <h3>История начислений и списаний</h3>
      <br />
      {history?.map((elem) => (
      <div key={elem.timeStamp} className="wrapper between">
        <h5>{elem.tokenName}</h5>
        <div>
          <p>{elem.value}</p>
        </div>
      </div>))}
    </div>
  );
}
