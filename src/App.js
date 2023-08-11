import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Auth from "./pages/Auth";
import Plans from "./pages/Plans";
import Success from "./pages/Subscriptions";
import Subscriptions from "./pages/Subscriptions";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Auth />}></Route>
          <Route path="/plans" exact element={<Plans />}></Route>
          <Route path="/Success" exact element={<Success />}></Route>
          <Route
            path="/Subscriptions"
            exact
            element={<Subscriptions />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
