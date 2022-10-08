import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { UserNFTBalance } from "../../components/UserNFTBalance/UserNFTBalance";

import "./UserList.css";

function UserList() {
  const users = useSelector((state) => state.root.users);
  useEffect(() => {}, []);
  return (
    <div className="container divider">
        <div className="wrapper">
        {users?.map((user) => (
          <UserNFTBalance key={user.id} id={user.id} />
        ))}
      </div>
    </div>
  );
}

export default UserList;
