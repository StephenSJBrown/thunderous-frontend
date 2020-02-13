import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";

import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer, toast } from 'react-toastify';

import HomePage from "./pages/Home";
import Navbar from "./components/Navbar";

import Profile from "./pages/Profile";

import Centres from "./pages/Centres/Centres";

import Coupons from "./pages/Coupons/Coupons";
import Category from "./pages/Coupons/Category";
import Store from "./pages/Coupons/Store";
import Coupon from "./pages/Coupons/Coupon";
import MyCoupons from "./pages/Coupons/MyCoupons";
import Redeem from './pages/Coupons/Redeem'

import Deposit from "./pages/Deposits/Deposit"
import Weigh from "./pages/Deposits/Weigh"
import Result from "./pages/Deposits/Result"

import logo from "./logo.svg";
import "./App.css";

function App() {

  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("jwt") !== null
  );

  return (
    <div>
      <ToastContainer />
      <Navbar toast={toast} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />

      <Route exact path="/" component={HomePage} />
      <Route path="/profile" component={Profile} />
      <Route path="/centres" component={Centres} />

      <Route exact path="/deposit/" component={Deposit}/>
      <Route exact path="/deposit/weigh" component={Weigh}/>
      <Route path="/deposit/result" component={Result} />

      <Route exact path="/coupons/" component={Coupons} />
      <Route path="/coupons/:category" component={Category} />
      <Route path="/store/:store" component={Store} />
      <Route path="/coupon/:id" component={Coupon} />

      <Route path="/redeem" component={Redeem} />

      {/* <Route path="/mycoupons" component={MyCoupons} /> */}

      {/* <Route path="/coupons" component={Coupons} />
      <Route path="/coupons/:category" component={Category} />
      <Route path="/coupons/:store" component={Store} />
      <Route path="/coupons/:id" component={Coupon} /> */}
    </div>
  );
}

export default App;
