import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const request = await fetch("https://jsonplaceholder.typicode.com/users");
    const response = await request.json();

    setUsers(response);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1>Hello from home page</h1>

      {users.map((item) => {
        return (
          <Link to={`/users/${item.id}`}>
            <div key={item.id} className="user">
              <h2>{item.name}</h2>
              <h3>{item.username}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
