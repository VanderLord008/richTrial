import axios from "axios";
import React, { useEffect, useState } from "react";
import { createPurchaseSession, getPlans } from "../api";
import styles from "./plans.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Subscriptions from "./Subscriptions";

const Plans = () => {
  const [plans, setPlans] = useState([]);
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
    console.log(data);
    data.email = email;
    const { data: response } = await createPurchaseSession(data);
    console.log(response);
    window.location.href = response.url;
  };

  return (
    <div>
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
                  <div className={styles.btn}>
                    {" "}
                    <button>Mobile</button>
                  </div>
                  <div className={`${styles.text2} ${styles.text22}`}>1000</div>
                  <div className={`${styles.text2} ${styles.text22}`}>Good</div>
                  <div className={`${styles.text2} ${styles.text22}`}>480p</div>
                  <div className={styles.devices}>
                    <div className={`${styles.text3} ${styles.text22}`}>
                      Phone
                    </div>
                    <div className={`${styles.text3} ${styles.text22}`}>
                      Tablet
                    </div>
                  </div>
                </div>
                <div className={styles.basic}>
                  <div className={styles.btn}>
                    {" "}
                    <button>Basic</button>
                  </div>
                  <div className={`${styles.text2}`}>2000</div>
                  <div className={`${styles.text2}`}>Good</div>
                  <div className={`${styles.text2}`}>480p</div>
                  <div className={styles.devices}>
                    <div className={`${styles.text3}`}>Phone</div>
                    <div className={`${styles.text3}`}>Tablet</div>
                    <div className={`${styles.text3}`}>Computer</div>
                    <div className={`${styles.text3}`}>TV</div>
                  </div>
                </div>
                <div className={styles.standard}>
                  <div className={styles.btn}>
                    {" "}
                    <button>Standard</button>
                  </div>
                  <div className={`${styles.text2}`}>5000</div>
                  <div className={`${styles.text2}`}>Better</div>
                  <div className={`${styles.text2}`}>1080p</div>
                  <div className={styles.devices}>
                    <div className={`${styles.text3}`}>Phone</div>
                    <div className={`${styles.text3}`}>Tablet</div>
                    <div className={`${styles.text3}`}>Computer</div>
                    <div className={`${styles.text3}`}>TV</div>
                  </div>
                </div>
                <div className={styles.premium}>
                  <div className={styles.btn}>
                    {" "}
                    <button>Premium</button>
                  </div>
                  <div className={`${styles.text2}`}>7000</div>
                  <div className={`${styles.text2}`}>Best</div>
                  <div className={`${styles.text2}`}>4K + HDR</div>
                  <div className={styles.devices}>
                    <div className={`${styles.text3}`}>Phone</div>
                    <div className={`${styles.text3}`}>Tablet</div>
                    <div className={`${styles.text3}`}>Computer</div>
                    <div className={`${styles.text3}`}>TV</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
        <div className={styles.btn1}>
          <button
            className={styles.button1}
            onClick={() => purchaseHandler(plans[3])}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plans;
