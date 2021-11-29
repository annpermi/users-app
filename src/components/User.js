import React, { useState } from "react";
import UserInfo from "./UserInfo";
import "./user.css";

const pickTheColor = (role) => {
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
const User = ({ users }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = (id) => {
    const newUsers = users.filter((user) => console.log(id === user.id));
    setExpanded(!expanded);
  };

  /* 
  city: "Dallas"
createdAt: "1970-01-01T06:01:00.000Z"
email: "alexander@conqueror.com"
firstName: "Alexander"
id: 0
lastLoggedIn: "1970-01-01T06:02:00.000Z"
lastName: "the Great"
phone: "5558675309"
role: "Administrator"
state: "TX"
street: "1234 Not a Fake Street"
zip: "75201"
  */

  return (
    <div>
      {users.map((user) => {
        const {
          id,
          firstName,
          lastName,
          role,
          email,
          street,
          phone,
          createdAt,
          lastLoggedIn,
        } = user;
        return (
          <div key={id} className="card">
            <div className="card_container">
              <div className="user">
                <img
                  src="/icons/user.svg"
                  alt="user"
                  style={{
                    filter: pickTheColor(role),
                  }}
                />
                <div className="user_description">
                  <p className="user_description_name">
                    {firstName} {lastName}
                  </p>
                  <p>{role}</p>
                  <p className="user_description_email">{email}</p>
                </div>
              </div>
              <button
                id={id}
                className="user_card_button"
                onClick={(event) =>
                  //   handleExpandClick(event.currentTarget.parentNode)
                  handleExpandClick(event.currentTarget.id)
                }
              >
                <img src="/icons/expand_more.svg" alt="user" />
              </button>
            </div>
            <div className="user_info">
              {expanded && (
                <UserInfo
                  street={street}
                  phone={phone}
                  createdAt={createdAt}
                  lastLoggedIn={lastLoggedIn}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default User;
