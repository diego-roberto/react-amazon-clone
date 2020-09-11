import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from './Payment';
import Orders from './Orders';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

function App() {
  const [{}, dispatch] = useStateValue();

  const promisse = loadStripe(
    "pk_test_51HQ5E5B1xeOdXcP0tQvhTc1nm8dQrNwBcmc38dzFLPLpfsxr8f5CWeHjGL3S2yQTlZR6EGIP6dLr14yhSBMgtONG00t7wt30YR"
    );

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS:", authUser);  //TODO remover isto depois

      if (authUser) {
        //user logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>

      <div className="app">
        <Switch>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
              <Elements stripe={promisse}>
                <Payment />
              </Elements>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>
      </div>

    </Router>
  );
}

export default App;
