import React, { useState } from "react";
import UserMain from "./UserMain";
import UserHeader from "./UserHeader";
import "./user.css";

const User = ({ users }) => {
  const [expanded, setExpanded] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleExpandClick = (e, data) => {
    setSelectedUser(data);
    console.log({ e, selectedUser });
    // const newUsers = users.filter((user) => console.log(id === user.id));
    setExpanded(!expanded);
  };

  return (
    <div>
      {users.map((user) => {
        return (
          <div
            key={user.id}
            className="card"
            style={{ height: !expanded ? "80px" : "270px" }}
          >
            <UserHeader
              user={user}
              handleExpandClick={handleExpandClick}
              expanded={expanded}
            />
            {expanded && selectedUser && (
              <UserMain
                selectedUser={selectedUser}
                // street={street}
                // phone={phone}
                // createdAt={createdAt}
                // lastLoggedIn={lastLoggedIn}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default User;
