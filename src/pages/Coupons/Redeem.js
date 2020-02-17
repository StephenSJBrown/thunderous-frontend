import React from "react";
import { useLocation, useHistory } from "react-router-dom";

import styled from "styled-components";
import Fade from "react-reveal";

import Page from "../../components/Page";
import Button from "../../components/Button";

import Centre3QR from "../../images/Centre3QR.png";

const Redeem = () => {
  const history = useHistory();
  const {
    state: { name, code, description, status }
  } = useLocation();
  // const location = useLocation()
  console.log(name);

  if (name == 0) {
    history.push("/");
  }

  const handleCancel = () => {
    history.push("/mycoupons");
  };

  const Redeem = styled.div`
    margin: 10px;
    /* height: 70vh; */
    display: flex;
    background-color: #b0e6ce;
    flex-direction: column;
    align-items: center;
    width: 90vw;
    max-width: 400px;
    border-radius: 10px;
  `;

  const Code = styled.div`
    border-radius: 44px;
    border: none;
    width: 75vw;
    max-width: 332px;
    height: 48px;
    background-color: #494949;
    margin-top: 10px;
    font-size: 20px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Img = styled.img`
    width: 75vw;
    max-width: 300px;
  `;

  return (
    <Page className="page">
      <Fade bottom cascade>
        <Redeem>
          <h2>
            {name.charAt(0).toUpperCase()}
            {name.substr(1)}
          </h2>
          <Img src={Centre3QR} alt="coupon qr code"></Img>
          <Code>{code.toUpperCase()}</Code>
          <p>{description}</p>
          <p>{status}</p>
        </Redeem>
        <Button onClick={handleCancel}>Cancel</Button>
      </Fade>
    </Page>
  );
};

export default Redeem;
