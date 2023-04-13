import React, { useState, useContext } from "react";

import { Authoentication } from "./Context";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser, setIsLoggedIn } = useContext(Authoentication);

  const handleclick = () => {
    if (username === "admin" && password === "admin123") {
      setIsLoggedIn(true);
      setUser(username);
    } else {
      alert("please enter correct details");
    }
  };
  return (
    <div>
      <div className="login_page">
        <h2>Login Form</h2>
        <div className="login_page1">
          <label>User name</label>

          <input
            type="text"
            placeholder="username:admin"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="login_page1">
          <label>password</label>

          <input
            type="text"
            placeholder="password:admin123"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="btn">
          <button onClick={handleclick}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
