import React from "react";
import "./userHeader.css";

const colorHandleForUserIcon = (role) => {
  const blue =
    "invert(54%) sepia(17%) saturate(1865%) hue-rotate(161deg) brightness(80%) contrast(109%)";
  const green =
    "invert(60%) sepia(39%) saturate(345%) hue-rotate(132deg) brightness(97%) contrast(88%)";
  const grey =
    "invert(51%) sepia(0%) saturate(0%) hue-rotate(283deg) brightness(96%) contrast(91%)";

  if (role === "Administrator") {
    return blue;
  } else if (role === "User") {
    return green;
  } else {
    return grey;
  }
};

const UserHeader = ({ user, handleExpandClick, expanded }) => {
  console.log({ user });
  const { id, firstName, lastName, role, email } = user;
  return (
    <div className="card_header">
      <div className="card_header_left">
        <img
          src="/icons/user.svg"
          alt="user"
          style={{
            filter: colorHandleForUserIcon(role),
          }}
        />
        <div>
          <p className="name">
            {firstName} {lastName}
          </p>
          <p>{role}</p>
          <p className="email">{email}</p>
        </div>
      </div>
      <button
        id={id}
        className="card_header_right"
        onClick={(e) => handleExpandClick(e.currentTarget.id, user)}
      >
        <img
          src={!expanded ? "/icons/expand_more.svg" : "/icons/expand_less.svg"}
          alt="user"
        />
      </button>
    </div>
  );
};

export default UserHeader;
