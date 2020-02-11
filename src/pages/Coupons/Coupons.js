import React from "react";
import { Link } from 'react-router-dom'

import Category from "../../components/Category";
import Header from '../../components/Header'

const Coupons = () => {
  return (
    <>
      <Header/>
          <Category name="food" />
          <Category name="clothing" />
          <Category name="hotels" />
          <Category name="experience" />
          <Category name="travel" />
          <Category name="insurance" />
    </>
  );
};

export default Coupons;
