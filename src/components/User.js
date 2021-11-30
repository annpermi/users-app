import React from "react";
import UserMain from "./UserMain";
import UserHeader from "./UserHeader";
import "./user.css";

const User = ({ userData, isExpanded, addSelectedIds }) => {
  return (
    <div
      key={userData.id}
      className="card"
      style={{ height: !isExpanded ? "80px" : "270px" }}
      id={userData.id}
      onClick={(e) => addSelectedIds(e.currentTarget.id)}
    >
      <UserHeader userData={userData} isExpanded={isExpanded} />
      {isExpanded && <UserMain selectedUser={userData} />}
    </div>
  );
};

export default User;
