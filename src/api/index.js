import axios from "axios";

const apiURL = "http://localhost:5000";

export const createUser = (data) => axios.post(apiURL + "/signup", data);
export const loginUser = (data) => axios.post(apiURL + "/login", data);
export const getPlans = () => axios.get(apiURL + "/plans");
//export const getSubs = () => axios.get(apiURL + "/subscriptions", { params });

export const createPurchaseSession = (data) =>
  axios.post(apiURL + "/session", data);
export const cancelSubscription = (data) =>
  axios.post(apiURL + "/cancel", data);
