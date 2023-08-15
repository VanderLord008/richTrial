import axios from "axios";
import React, { useEffect, useState } from "react";
import { createPurchaseSession, getPlans } from "../api";
import styles from "./plans.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Subscriptions from "./Subscriptions";

const Plans = () => {
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState("Mobile");
  const [loading, setLoading] = useState(false);
  const email = useSelector((state) => state.user.userEmail);
  const fetchPlans = async (req, res) => {
    const allPlans = await getPlans();
    console.log(allPlans);
    setPlans(allPlans.data.data);
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  const purchaseHandler = async (data) => {
    setLoading(true);
    console.log(data);
    data.email = email;
    const { data: response } = await createPurchaseSession(data);
    console.log(response);
    window.location.href = response.url;
  };

  const planSelector = () => {
    if (selectedPlan === "Mobile") {
      purchaseHandler(plans[3]);
    } else if (selectedPlan === "Basic") {
      purchaseHandler(plans[2]);
    } else if (selectedPlan === "Standard") {
      purchaseHandler(plans[1]);
    } else if (selectedPlan === "Premium") {
      purchaseHandler(plans[0]);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.mySubs}>
        <Link to={"/subscriptions"}>My subscriptions</Link>
      </div>
      {/* {plans.map((plan) => {
        return (
          <div className={styles.container} key={plan.id}>
            {`${plan.nickname}   ${plan.unit_amount / 100}`}
            {console.log(plan)}
            <button >buy</button>
          </div>
        );
      })} */}
      <div className={styles.container1}>
        <div className={styles.heading}>
          <p>Choose the right plan for you</p>
        </div>
        <div className={styles.planForm}>
          {/* {prices.map((prices) => { */}
          {/* return ( */}
          <>
            <div className={styles.planPage}>
              <div className={styles.col1}>
                <div className={styles.radioBtn}>
                  <label className={styles.switch}>
                    <input type="checkbox" />
                    <span className={styles.slider}></span>
                  </label>
                </div>
                <div className={styles.text}>
                  <div className={styles.contain}>Monthly Price</div>
                  <div className={styles.contain}>Video Quality</div>
                  <div className={styles.contain}>Resolution</div>
                  <div className={styles.contain}>
                    Devices you can use to watch
                  </div>
                </div>
              </div>
              <div className={styles.col2}>
                <div className={styles.mobile}>
                  <div
                    className={`${styles.btn} ${
                      selectedPlan === "Mobile" ? styles.active : ""
                    } `}
                  >
                    <button onClick={() => setSelectedPlan("Mobile")}>
                      Mobile
                    </button>
                  </div>
                  <div
                    className={`${styles.text2} ${
                      selectedPlan === "Mobile" ? styles.active : ""
                    }`}
                  >
                    <p>Rs 1000</p>
                  </div>
                  <div
                    className={`${styles.text2} ${
                      selectedPlan === "Mobile" ? styles.active : ""
                    }`}
                  >
                    <p>Good</p>
                  </div>
                  <div
                    className={`${styles.text2} ${
                      selectedPlan === "Mobile" ? styles.active : ""
                    }`}
                  >
                    <p>480p</p>
                  </div>
                  <div className={styles.devices}>
                    <div
                      className={`${styles.text3} ${
                        selectedPlan === "Mobile" ? styles.active : ""
                      }`}
                    >
                      <p>Phone</p>
                    </div>
                    <div
                      className={`${styles.text3} ${
                        selectedPlan === "Mobile" ? styles.active : ""
                      }`}
                    >
                      <p>Tablet</p>
                    </div>
                  </div>
                </div>
                <div className={styles.basic}>
                  <div
                    className={`${styles.btn} ${
                      selectedPlan === "Basic" ? styles.active : ""
                    }`}
                  >
                    <button onClick={() => setSelectedPlan("Basic")}>
                      Basic
                    </button>
                  </div>
                  <div
                    className={`${styles.text2} ${
                      selectedPlan === "Basic" ? styles.active : ""
                    }`}
                  >
                    <p>Rs 2000</p>
                  </div>
                  <div
                    className={`${styles.text2} ${
                      selectedPlan === "Basic" ? styles.active : ""
                    }`}
                  >
                    <p>Good</p>
                  </div>
                  <div
                    className={`${styles.text2} ${
                      selectedPlan === "Basic" ? styles.active : ""
                    }`}
                  >
                    <p>480p</p>
                  </div>
                  <div className={styles.devices}>
                    <div
                      className={`${styles.text3} ${
                        selectedPlan === "Basic" ? styles.active : ""
                      }`}
                    >
                      <p>Phone</p>
                    </div>
                    <div
                      className={`${styles.text3} ${
                        selectedPlan === "Basic" ? styles.active : ""
                      }`}
                    >
                      <p>Tablet</p>
                    </div>
                    <div
                      className={`${styles.text3} ${
                        selectedPlan === "Basic" ? styles.active : ""
                      }`}
                    >
                      <p>Computer</p>
                    </div>
                    <div
                      className={`${styles.text3} ${
                        selectedPlan === "Basic" ? styles.active : ""
                      }`}
                    >
                      <p>TV</p>
                    </div>
                  </div>
                </div>
                <div className={styles.standard}>
                  <div
                    className={`${styles.btn} ${
                      selectedPlan === "Standard" ? styles.active : ""
                    }`}
                  >
                    <button onClick={() => setSelectedPlan("Standard")}>
                      Standard
                    </button>
                  </div>
                  <div
                    className={`${styles.text2} ${
                      selectedPlan === "Standard" ? styles.active : ""
                    }`}
                  >
                    <p>5000</p>
                  </div>
                  <div
                    className={`${styles.text2} ${
                      selectedPlan === "Standard" ? styles.active : ""
                    }`}
                  >
                    <p>Better</p>
                  </div>
                  <div
                    className={`${styles.text2} ${
                      selectedPlan === "Standard" ? styles.active : ""
                    }`}
                  >
                    <p>1080p</p>
                  </div>
                  <div className={styles.devices}>
                    <div
                      className={`${styles.text3} ${
                        selectedPlan === "Standard" ? styles.active : ""
                      }`}
                    >
                      <p>Phone</p>
                    </div>
                    <div
                      className={`${styles.text3} ${
                        selectedPlan === "Standard" ? styles.active : ""
                      }`}
                    >
                      <p>Tablet</p>
                    </div>
                    <div
                      className={`${styles.text3} ${
                        selectedPlan === "Standard" ? styles.active : ""
                      }`}
                    >
                      <p>Computer</p>
                    </div>
                    <div
                      className={`${styles.text3} ${
                        selectedPlan === "Standard" ? styles.active : ""
                      }`}
                    >
                      <p>TV</p>
                    </div>
                  </div>
                </div>
                <div className={styles.premium}>
                  <div
                    className={`${styles.btn} ${
                      selectedPlan === "Premium" ? styles.active : ""
                    }`}
                  >
                    <button onClick={() => setSelectedPlan("Premium")}>
                      Premium
                    </button>
                  </div>
                  <div
                    className={`${styles.text2} ${
                      selectedPlan === "Premium" ? styles.active : ""
                    }`}
                  >
                    <p>7000</p>
                  </div>
                  <div
                    className={`${styles.text2} ${
                      selectedPlan === "Premium" ? styles.active : ""
                    }`}
                  >
                    <p>Best</p>
                  </div>
                  <div
                    className={`${styles.text2} ${
                      selectedPlan === "Premium" ? styles.active : ""
                    }`}
                  >
                    <p>4K + HDR</p>
                  </div>
                  <div className={styles.devices}>
                    <div
                      className={`${styles.text3} ${
                        selectedPlan === "Premium" ? styles.active : ""
                      }`}
                    >
                      <p>Phone</p>
                    </div>
                    <div
                      className={`${styles.text3} ${
                        selectedPlan === "Premium" ? styles.active : ""
                      }`}
                    >
                      <p>Tablet</p>
                    </div>
                    <div
                      className={`${styles.text3} ${
                        selectedPlan === "Premium" ? styles.active : ""
                      }`}
                    >
                      <p>Computer</p>
                    </div>
                    <div
                      className={`${styles.text3} ${
                        selectedPlan === "Premium" ? styles.active : ""
                      }`}
                    >
                      <p>TV</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
        <div className={styles.btn1}>
          <button className={styles.button1} onClick={() => planSelector()}>
            {loading ? "processing..." : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plans;
