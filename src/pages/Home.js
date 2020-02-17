import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import Header from "../components/Header";
import Page from "../components/Page";

import HomeIcon from "../icons/home.svg";
import CentersIcon from "../icons/location.svg";
import DepositIcon from "../icons/weight.svg";
import CouponIcon from "../icons/coupon.svg";

const BackgroundStyle = {
  clipPath: 'polygon(66 % 67 %, 100 % 13 %, 100 % 100 %, 0 100 %)',
  backgroundColor: '#B0E6CE',
  backgroundImage: 'linear - gradient(to bottom right, #B0E6CE, #F7FFFB)',
  height: '100vh',
  width: '100vw',
  position: 'fixed',
  top: '0',
  left: '0'
  }
  
const HomePage = () => {
  
    
  const MainButton = styled.div`
    width: 251px;
    height: 92px;
    border-radius: 30px;
    background-color: #eac1b4;
    margin-top: 20px;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 24px;
    box-sizing: border-box;
  `;

  return (
    <Page className="page">
      <Header>
        <img alt="" src={HomeIcon}/>
      </Header>
      <br />
      <div style={{marginTop:'50px'}}>
        <Link to="/centres">
          <MainButton>
            <h2>Centres</h2> <img alt="" src={CentersIcon} />
          </MainButton>
        </Link>
        <br />
        <Link to="/deposit">
          <MainButton>
            <h2>Deposit</h2> <img alt="" src={DepositIcon} />
          </MainButton>
        </Link>
        <br />
        <Link to="/coupons">
          <MainButton>
            <h2>Coupons</h2> <img alt="" src={CouponIcon} />
          </MainButton>
        </Link>
        <br />
      </div>
      <div className="background-gradient"></div>
    </Page>
  );
};

export default HomePage;
