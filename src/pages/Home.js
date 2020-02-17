import React from "react";
import { Link, useHistory } from "react-router-dom";

import styled from "styled-components";

import Landing from "./Landing";

import Header from "../components/Header";
import Page from "../components/Page";

import HomeIcon from "../icons/home.svg";
import CentersIcon from "../icons/location.svg";
import DepositIcon from "../icons/weight.svg";
import CouponIcon from "../icons/coupon.svg";

const HomePage = () => {
  let id = localStorage.getItem("jwt");

  const history = useHistory();

  const login = () => {
    history.push("/login");
  };

  const signup = () => {
    history.push("/signup");
  };

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
    <>
      {id ? (
        <>
          <Header />
          <Page className="page">
            <img alt="" src={HomeIcon} />
            <br />
            <div style={{ marginTop: "50px" }}>
              <Link to="/centres">
                <MainButton>
                  <h2>Centres</h2> <img alt="" src={CentersIcon} />
                </MainButton>
              </Link>
              <Link to="/deposit">
                <MainButton>
                  <h2>Deposit</h2> <img alt="" src={DepositIcon} />
                </MainButton>
              </Link>
              <Link to="/coupons">
                <MainButton>
                  <h2>Coupons</h2> <img alt="" src={CouponIcon} />
                </MainButton>
              </Link>
            </div>
            <div className="background-gradient"></div>
          </Page>{" "}
        </>
      ) : (
        <Landing />
      )}
    </>
  );
};

export default HomePage;
