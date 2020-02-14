import React from "react";
import { useLocation, useHistory } from "react-router-dom";

import Button from '../../components/Button'

import styled from 'styled-components'

import Centre3QR from '../../images/Centre3QR.png'

const Redeem = () => {
  const history = useHistory();
  // const { state: name = "", code, description, status } = useLocation();
  const location = useLocation()
  console.log(location)

  // if (name == "") {
  //   history.push("/");
  // }

  const handleCancel = () => {
      history.push("/mycoupons")
  }

  const Redeem = styled.div`
  margin: 10px;
  /* height: 70vh; */
  display: flex;
  background-color: #B0E6CE;
  flex-direction: column;
  align-items: center;
  `

  const Code = styled.div`
  border-radius: 44px; 
border: none;
width: 332px;
height: 48px;
background-color: #494949;
margin-top: 10px;
font-size: 20px;
color: #ffffff;
display: flex;
justify-content: center;
align-items: center;
  `

  return (
    <>
      <Redeem>
      <h2>name</h2>
      <img src={Centre3QR} alt="coupon qr code"></img>
      <Code>{'code'.toUpperCase()}</Code>
      <p>description</p>
      <p>status</p>
      </Redeem>
      <Button onClick={handleCancel}>Cancel</Button>
    </>
  );
};

export default Redeem;
