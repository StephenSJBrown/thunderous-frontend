import React, { useState, useEffect } from "react";

import axios from "axios";
import styled from "styled-components";

import Page from "../../components/Page";
import LoadingIndicator from "../../components/LoadingIndicator";

import goarrow from "../../icons/goarrow.svg";

const Centres = () => {
  let key = process.env.REACT_APP_MAP;

  const [placeID, setPlaceID] = useState("");
  const [name, setName] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  const Centre = styled.div`
    width: 276px;
    height: 120px;
    background: #eac1b4;
    border-radius: 30px;
    padding: 12px;
    box-sizing: border-box;
  `;

  const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  return (
    <Page>
      <h1>Centres</h1>
      <p>Your nearest recycling centre is: </p>
      <Centre>
        <h3>1. Super Centre Subang</h3>
        <Flex>
          <h3>1.1km away</h3>
          <a href="#">
            <img src={goarrow}></img>
          </a>
        </Flex>
      </Centre>
    </Page>
  );
};

export default Centres;
