import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import custCoupon from "../icons/custCoupon.svg";

const Coupon = ({ name, deal, points, id }) => {

  const CouponWrap = styled.div`
    background-image: url(${custCoupon});
    margin: 0 12px;
    width: 156px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const P = styled.p`
  margin: 0px;
  `
  const H3 = styled.h3`
  margin: 0px;
  `

  return (
    <Link to={`/coupon/${id}`}>
      <CouponWrap>
        <P>{name}</P>
        <H3>{deal}% off</H3>
        <P>{points} points</P>
      </CouponWrap>
    </Link>
  );
};

export default Coupon;
