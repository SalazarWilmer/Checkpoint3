import React, { useState, useEffect } from "react";
import axios from "axios";

const Cards = () => {
  const [users, setUsers] = useState([]);
  const fetchData = async () => {
    axios
      .get("https://random-data-api.com/api/users/random_user?size=4")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error(error.message));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2> USERS </h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>Name:</strong> {user.username}
            <strong>Email:</strong> {user.email}
            <strong>Ciudad:</strong> {user.address.city}
            <strong>Estado:</strong> {user.address.state}
            <strong>Avatar:</strong>
            <img src={user.avatar} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Cards;
