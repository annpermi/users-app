import React from "react";
import "./userMain.css";

const UserInfo = ({ selectedUser }) => {
  const { city, street, state, zip, phone, createdAt, lastLoggedIn } =
    selectedUser;

  const getDate = (dataStr) => {
    const date = new Date(dataStr);
    const time = date.toLocaleString();
    return time.slice(0, time.length - 6) + time.slice(-3);
  };

  const formatPhoneNumber = (phoneNumberString) => {
    //https://www.codegrepper.com/code-examples/javascript/javascript+function+to+format+phone+number
    var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return "(" + match[1] + ") " + match[2] + "-" + match[3];
    }
    return null;
  };

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
        <p>{formatPhoneNumber(phone)}</p>
      </div>
      <div>
        <p>Created At</p>
        <p>{getDate(createdAt)}</p>
      </div>
      <div>
        <p>Last Logged In</p>
        <p>{getDate(lastLoggedIn)}</p>
      </div>
    </div>
  );
};

export default UserInfo;
