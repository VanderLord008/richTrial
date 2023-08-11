import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Register from "../components/Register";
import Login from "../components/Login";

const Auth = () => {
  const username = useSelector((state) => state.user.name);
  const [signup, setSignup] = useState(true);
  function handleState() {
    setSignup(!signup);
  }
  return (
    <>
      {signup ? (
        <Register change={handleState} />
      ) : (
        <Login change={handleState} />
      )}
    </>
  );
};

export default Auth;
