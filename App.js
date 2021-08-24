import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const loadUsers = async () => {
    //console.log("before");
    const response = await fetch("https://api.github.com/users");
    const jsonresponse = await response.json();
    setUsers(jsonresponse);
  };

  return (
    <div className="App">
      <section>
        <h1>Go On Trip</h1>
        <button onClick={loadUsers}> Get Data </button>
      </section>
      <h2> Users:</h2>
      <ul>
        {users.map(({ id, login,avatar_url }) => (
          <div>
          <img src={avatar_url}></img>
          <li key={id}>Name: {login}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default App;
