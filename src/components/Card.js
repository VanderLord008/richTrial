import React from "react";
import styles from "./Card.module.css";
import { Link, useNavigate } from "react-router-dom";
import { cancelSubscription } from "../api";
const Card = (props) => {
  console.log("props");
  console.log(props);
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/plans");
  };
  const cancelHandler = async (data) => {
    const result = await cancelSubscription(data);
    console.log(result);
    navigate("/plans");
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.cardContainer}>
        <div className={styles.heading}>
          <div className={styles.info}>
            <h2>Current Plan Details</h2>
            <p>{props.data.status}</p>
          </div>
          <div>
            {props.data.status !== "canceled" && (
              <button onClick={() => cancelHandler(props.data)}>cancel</button>
            )}
          </div>
        </div>
        <div className={styles.planName}>
          <p>{props.data.plan.nickname}</p>
        </div>
        <div className={styles.price}>
          <p>{props.data.plan.amount / 100}/yr</p>
        </div>
        <div className={styles.choosePlan}>
          <button onClick={clickHandler}>
            <p>Choose Plan</p>
          </button>
        </div>
        <div className={styles.description}>
          {props.data.status !== "canceled" && (
            <p>{`your subscription has started on  ${new Date(
              props.data.current_period_start * 1000
            ).toDateString()} and will auto renew on ${new Date(
              props.data.current_period_end * 1000
            ).toDateString()}`}</p>
          )}
          {props.data.status === "canceled" && (
            <p>{`your subscription was cancelled and you will lose access on
              ${new Date(
                props.data.current_period_end * 1000
              ).toDateString()}`}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
