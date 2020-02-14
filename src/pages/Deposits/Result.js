import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

import styled from "styled-components";

import Page from "../../components/Page";
import Button from "../../components/Button";
import Circle from "../../components/Circle";

import weightgreen from "../../icons/weightgreen.svg";
import locationgreen from "../../icons/locationgreen.svg";
import coins from "../../icons/coins.svg";
import weightsmall from "../../icons/weightsmall.svg";

const Result = () => {
  const history = useHistory();
  const { state: dataFromPreviousPage = 0 } = useLocation();
  const { weight, points, centre_name } = dataFromPreviousPage;

  if (dataFromPreviousPage == 0) {
    history.push("/");
  }

  const Flex = styled.div`
    display: flex;
  `;

  const H1 = styled.h1`
  margin: 0;
  `

  const Spacer = styled.div`
  height: 48px;
  `
  const Icon = styled.img`
  margin: 0 12px;
  `

  return (
    <Page>
      <img src={weightgreen} />
      <Flex>
        <h2>{centre_name}</h2>{"  "}
        <Icon src={locationgreen}></Icon>
      </Flex>
      <Spacer/>
      <h2>You deposited</h2>
      <Spacer/>
      <Flex>
      <h2>{weight}</h2>
      <h2>kg</h2>
      <Icon src={weightsmall}></Icon>
      </Flex>
      <Spacer/>
      <h3>and recieved</h3>
      <Circle inputColor="#B0E6CE">
        <H1>{points}</H1>
        <img src={coins}></img>
      </Circle>{" "}
      <h2>points</h2>
      <Link to="/coupons">
        <Button>See coupons</Button>
      </Link>
    </Page>
  );
};

export default Result;
