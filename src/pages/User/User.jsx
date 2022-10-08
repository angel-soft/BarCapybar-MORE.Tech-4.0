import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { UserNFTBalance } from "../../components/UserNFTBalance/UserNFTBalance";

import "./User.css";

import { useParams} from 'react-router-dom'

function User() {
  const users = useSelector((state) => state.root.users);
    let { userId } = useParams();
  useEffect(() => {}, []);

  const user = users.find(
      ({ id }) => +id === +userId
  )
  return (
    <div className="container divider">
        <div className="wrapper p-24">
        {user != null ? (
          <UserNFTBalance key={user.id} id={user.id} details />
        ): null}
      </div>
    </div>
  );
}

export default User;
