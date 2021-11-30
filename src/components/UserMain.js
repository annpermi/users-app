import React from "react";
import "./userMain.css";

const UserInfo = ({ selectedUser }) => {
  const { city, street, state, zip, phone, createdAt, lastLoggedIn } =
    selectedUser;
  return (
    <div className="card_main">
      <div>
        <p>Address</p>
        <p>
          {street}, {city}, {state} {zip}
        </p>
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
    </div>
  );
};

export default UserInfo;
// 1970-01-01T06:01:00.000Z
// 1/1/70 12:01 AM

const getDate = (dataStr) => {
  const date = new Date(dataStr);
  const time = date.toLocaleString();
  return time;
};

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
