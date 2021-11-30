import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import User from "./components/User";
import CircularProgress from "@mui/material/CircularProgress";
import "../public/icons/group.svg";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedIds, setSelectedIds] = useState({});

  /* Api */
  const getUsers = () => {
    axios
      .get("users.json")
      .then((res) => setUsers(res.data))
      .then(() => setIsLoading(false))
      .catch((err) => {
        console.log(err.message);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    // setTimeout(() => {
    getUsers();
    // }, 5000);
  }, []);

  const addSelectedIds = (id) => {
    if (selectedIds.hasOwnProperty(id)) {
      selectedIds[id] = !selectedIds[id];
    } else {
      selectedIds[id] = true;
    }
    setSelectedIds({ ...selectedIds });
  };

  const userList = users.map((userData) => {
    const { id } = userData;
    const isExpanded = selectedIds.hasOwnProperty(id) && selectedIds[id];

    return (
      <User
        key={id}
        userData={userData}
        isExpanded={isExpanded}
        addSelectedIds={addSelectedIds}
      />
    );
  });

  return (
    <div className="container">
      <div className="wrapper">
        <header>
          <img src="/icons/group.svg" alt="users" />
          <p>Users</p>
        </header>
        <main>{isLoading ? <CircularProgress /> : userList}</main>
      </div>
    </div>
  );
}

export default App;
