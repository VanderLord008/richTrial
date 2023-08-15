import React, { useState } from "react";
import styles from "./Register.module.css";
import { createUser, loginUser } from "../api";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCustomerId, setUser, setUserEmail } from "../store/userSlice";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submissionHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    let newUser = {
      email: email,
      password: password,
    };
    console.log(newUser);
    try {
      const result = await loginUser(newUser);
      console.log(result);
      if (result.data.errors.length > 0) {
        setLoading(false);
        setError(result.data.errors[0].msg);
      } else {
        dispatch(setUser(result.data.data.name));
        dispatch(setCustomerId(result.data.data.stripeCustomerId));
        dispatch(setUserEmail(result.data.data.email));
        navigate("/plans");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <div className={styles.heading}>Log in to your account</div>
        <form>
          <div className={styles.ele2}>
            <p>Email</p>
            <div className={styles.form1}>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Email"
                type="email"
              ></input>
            </div>
          </div>
          <div className={styles.ele3}>
            <p>Password</p>
            <div className={styles.form1}>
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="password"
                type="password"
              ></input>
            </div>
          </div>
        </form>
        <div className={styles.errorText}>{error}</div>
        <div className={styles.btn}>
          <button type="submit" onClick={submissionHandler} disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>
        <div className={styles.written}>
          new to my app?
          <span onClick={() => props.change()}> Register</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
