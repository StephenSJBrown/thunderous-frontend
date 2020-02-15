import React from "react";
import { Link } from "react-router-dom";

import Category from "../../components/Category";

import styled from "styled-components";

import couponicon from '../../icons/coupon.svg'

const divStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  marginTop: "60px"
};

const iconStyle={
  textAlign:'center',
  marginTop:'20px '
}

const Mine = styled.div`
  background: #eac1b4;
  border-radius: 10px;
  height: 46px;
  width: 336px;
  margin: 12px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #494949;
`;

const Coupons = () => {
  return (
    <>
      <div> 
        <div style={iconStyle}>
          <img src={couponicon}/>
        </div>
        <div style={divStyle}>
          <Category name="food" />
          <Category name="clothing" />
          <Category name="hotels" />
          <Category name="experience" />
          <Category name="travel" />
          <Category name="insurance" />
        </div>
        <Link to="/mycoupons">
          <Mine>
            <h3>My Coupons</h3>
          </Mine>
        </Link>
      </div>
    </>
  );
};

export default Coupons;
