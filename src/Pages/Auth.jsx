import { useState } from "react";

function Auth() {
  const [login, setLogin] = useState(true);
  const [user, setUser] = useState({ username: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(login ? "login" : "sign up");
    console.log(user);
  };

  return (
    <div className="auth-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <h2>{login ? "Welcome Back" : "Create a New Account"}</h2>
        {!login && (
          <input
            name="username"
            type="text"
            placeholder="Enter your username here"
            required="true"
            value={user.username}
            onChange={(e) => {
              setUser({ ...user, [e.target.name]: e.target.value });
            }}
          />
        )}
        <input
          name="email"
          type="email"
          placeholder="Enter your email here"
          required="true"
          value={user.email}
          onChange={(e) => {
            setUser({ ...user, [e.target.name]: e.target.value });
          }}
        />
        <input
          name="password"
          type="password"
          placeholder="Enter your password here"
          required="true"
          value={user.password}
          onChange={(e) => {
            setUser({ ...user, [e.target.name]: e.target.value });
          }}
        />
        <button className="pointer" type="submit">
          {login ? "Login" : "Sign up"}
        </button>
        <p>
          {login ? "Don't" : "Already"} have an account?
          <span className="pointer" onClick={() => setLogin(!login)}>
            {login ? " Sign up here" : " Login here"}
          </span>
        </p>
      </form>
    </div>
  );
}

export default Auth;
