import React, { useState} from "react";

import styled from "styled-components";

import Page from "../../components/Page";

import goarrow from "../../icons/goarrow.svg";

import centreicon from '../../icons/location.svg'

const Centres = () => {
  // const [placeID, setPlaceID] = useState("");
  // const [name, setName] = useState("");

  // const [isLoading, setIsLoading] = useState(true);

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
      {/* <h1>Centres</h1> */}
      <div style={{marginTop:'20px'}}>
        <img src={centreicon}/>
      </div>
      <p>Your nearest recycling centre is: </p>
      <Centre>
        <h3>1. Super Centre Subang</h3>
        <Flex>
          <h3>1.1km away</h3>
          <a href="#">
            <img src={goarrow} alt="get directions"></img>
          </a>
        </Flex>
      </Centre>
    </Page>
  );
};

export default Centres;
