import React from "react";
import "./userInfo.css";

const UserInfo = ({ street, phone, createdAt, lastLoggedIn }) => {
  return (
    <>
      <div>
        <p>Address</p>
        <p>{street}</p>
      </div>
      <div>
        <p>Phone</p>
        <p>{phone}</p>
      </div>
      <div>
        <p>Created At</p>
        <p>{createdAt}</p>
      </div>
      <div>
        <p>Last Logged In</p>
        <p>{lastLoggedIn}</p>
      </div>
    </>
  );
};

export default UserInfo;
