import React, { useState } from "react";
import { Route, Link } from "react-router-dom";

import HomePage from "./pages/Home";
import Navbar from './components/Navbar'
import Profile from "./pages/Profile";
import logo from "./logo.svg";
import "./App.css";
import Coupons from "./pages/Coupons/Coupons";

function App() {
  return (
    <div>
      <Navbar/>

      <Route exact path="/" component={HomePage} />
      <Route path="/profile" component={UserProfilePage} />
      <Route path="/centres" component={UserProfilePage} />
      <Route path="/deposit" component={UserProfilePage} />

      <Route path="/coupons" component={Coupons} />
      <Route path="/coupons/:category" component={UserProfilePage} />
    </div>
  );
}

export default App;
