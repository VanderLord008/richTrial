import React, { useEffect, useState } from "react";
import { cancelSubscription, getSubs } from "../api";
import { useSelector } from "react-redux";
import axios, { all } from "axios";
import Card from "../components/Card";

const Subscriptions = () => {
  const [subs, setSubs] = useState([]);
  const email = useSelector((state) => state.user.userEmail);
  const fetchSubs = async (req, res) => {
    const allSubs = await axios({
      method: "get",
      url: "http://localhost:5000/subscriptions",
      params: {
        email: email,
      },
    });
    console.log("all subs");
    console.log(allSubs.data.data);
    setSubs(allSubs.data.data);
  };
  useEffect(() => {
    fetchSubs();
  }, []);

  const cancelHandler = async (data) => {
    const result = await cancelSubscription(data);
    console.log(result);
  };

  return (
    <div>
      {subs.map((sub) => {
        if (sub.status !== "canceled") {
          return (
            // <div key={sub.id}>
            //   {console.log(sub)}
            //   {`you are currently subscribed to ${sub.plan.nickname} for ${
            //     sub.plan.amount / 100
            //   }`}
            //   <button onClick={() => cancelHandler(sub)}>cancel</button>
            // </div>
            <Card key={sub.id} data={sub}></Card>
          );
        } else {
          return (
            // <div key={sub.id}>
            //   {console.log(sub)}
            //   {`you were subscribed to ${sub.plan.nickname} for ${
            //     sub.plan.amount / 100
            //   }`}
            // </div>
            <Card key={sub.id} data={sub}></Card>
          );
        }
      })}
      {/* : "you have no subs"} */}
    </div>
  );
};

export default Subscriptions;
