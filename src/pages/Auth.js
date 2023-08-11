import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Register from "../components/Register";
import Login from "../components/Login";
import styles from "./Auth.module.css";

const Auth = () => {
  const username = useSelector((state) => state.user.name);
  const [signup, setSignup] = useState(true);
  function handleState() {
    setSignup(!signup);
  }
  return (
    <div className={styles.container}>
      <div className={styles.component}>
        {signup ? (
          <Register change={handleState} />
        ) : (
          <Login change={handleState} />
        )}
      </div>
    </div>
  );
};

export default Auth;
