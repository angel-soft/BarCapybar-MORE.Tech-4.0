import React, { useEffect } from "react";
import { walletNftBalanceRequest } from "../../redux/actions/apiActions";
import { useDispatch, useSelector } from "react-redux";
import { Link} from 'react-router-dom'

import "./UserNFTBalance.css";
import NftList from "../Nft/NftList";

export function UserNFTBalance({ id, details }) {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.root.users);
  const user = users.find((user) => user.id === id);

  const { name, login, wallet } = user;

  useEffect(() => {
    if(wallet) {
      const { publicKey } = wallet;
      dispatch(walletNftBalanceRequest({ publicKey }));
    }
  }, [dispatch, wallet]);

  const nftBalance = user?.nftbalance ?? []
  const nftCount = (nftBalance).map(({tokens})=>tokens.length).reduce(
      (acc,val)=> acc+val,
      0
  )



  return (
    <div className="card">
      <h3><Link to={`/users/${id}`}>{name}</Link></h3>
      <p>{login}</p>
      <br />
      <h4>Баланс NFT</h4>
      <h3>{`${nftCount} NFT`}</h3>
        <div>
            {details != null ? (<NftList nftBalance={nftBalance}/>) : null}
        </div>
    </div>
  );
}
