import { useState } from "react";
import { useDispatch } from "react-redux";
import { login, requestOTP, signup } from "../Redux/features/authSlice";
import { useNavigate } from "react-router-dom";

function Auth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [mode, setMode] = useState("login");
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    otp: "",
  });

  const switchMode = () => setMode(mode === "login" ? "signup" : "login");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === "login") {
      // handle login
      dispatch(login(user)).then(
        (res) => res.payload?.data?.success && navigate("/")
      );
      return;
    }
    if (mode == "signup") {
      // send otp
      dispatch(requestOTP(user)).then(
        (res) => res.payload?.data?.success && setMode("otp")
      );
      return;
    }
    if (mode === "otp") {
      // handle otp verification
      dispatch(signup(user)).then(
        (res) => res.payload?.data?.success && navigate("/")
      );
      return;
    }
  };

  return (
    <div className="auth-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <h2>
          {mode === "otp" ? "Verify OTP"
            : mode === "signup" ? "Create a New Account" : "Welcome Back"}
        </h2>
        {mode === "signup" && (
          <input
            name="username"
            type="text"
            placeholder="Enter your username here"
            required={true}
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
          required={true}
          value={user.email}
          disabled={mode === "otp"}
          onChange={(e) => {
            setUser({ ...user, [e.target.name]: e.target.value });
          }}
        />
        {mode === "otp" && (
          <input
            name="otp"
            type="number"
            placeholder="Enter the otp here"
            required={true}
            value={user.otp}
            onChange={(e) => {
              setUser({ ...user, [e.target.name]: e.target.value });
            }}
          />
        )}
        {mode !== "otp" && (
          <input
            name="password"
            type="password"
            placeholder="Enter your password here"
            required={true}
            value={user.password}
            onChange={(e) => {
              setUser({ ...user, [e.target.name]: e.target.value });
            }}
          />
        )}
        <button className="pointer" type="submit">
          {mode === "otp" ? "Verify" : mode === "signup" ? "Sign up" : "Login"}
        </button>
        {mode !== "otp" && (
          <p>
            {mode === "login" ? "Don't" : "Already"} have an account?
            <span className="pointer" onClick={switchMode}>
              {mode === "login" ? " Sign up" : " Login"} here
            </span>
          </p>
        )}
      </form>
    </div>
  );
}

export default Auth;
