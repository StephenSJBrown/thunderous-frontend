import React from "react";
import { Link } from "react-router-dom"
import LoadingIndicator from '../components/LoadingIndicator'

const HomePage = () => {

  return (
      <div>
        <h1>Home Page</h1>
        <Link to="/centres">Centres</Link>
        <Link to="/deposit">Deposit</Link>
        <Link to="/coupons">Coupons</Link>
    </div>
  );
};

export default HomePage;
