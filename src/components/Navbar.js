import React, { useState} from "react";
import styled from "styled-components";
import { Link, useHistory, useLocation } from "react-router-dom";

import usericon from "../icons/usericon.png"
import applogo from "../icons/screenshotsmall.png"
import logouticon from "../icons/logouticongreen.svg"
import pointsicon from "../icons/pointsicon.svg"


const applogoStyle = {
  position: "absolute",
  left: "5px",
  top: "5px"
};

const NavBar = ({ toast ,points, username}) => {
  const location = useLocation();
  console.log(location.pathname);

  let id = localStorage.getItem("jwt");

  const history = useHistory();

  const logOut = () => {
    localStorage.removeItem("jwt");
    history.push("/");
    toast.success(`You've been logged out`, {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  };

  const NavBar = styled.header`
    width: 100vw;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 30px;
    background-color: transparent;
  `;

  const RightNav = styled.div`
    max-width: 25vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const Linker = styled.a`
    text-decoration: none;
    cursor: pointer;
  `;

  return ( <>
    { id ? <>
      <NavBar>
        {location.pathname === "/" ? (
          <div style={{display:'flex'}}>
            <Link to="/profile">
              <img style={{marginTop:'10px'}} src={usericon} alt="" />
            </Link>
             <h3 style={{marginTop:'20px', marginLeft:'10px'}}>{username}</h3>
          </div>
        ) : (
          <Link to="/">
            <Linker>
              <img style={applogoStyle} src={applogo} alt="Home" />
            </Linker>
          </Link>
        )}
        { id ? (
          <>
            <RightNav>
              <Link to="/coupons">
                <img style={{marginTop:'10px'}} src={pointsicon}/>
              </Link>
                <h3 style={{marginLeft:'10px',marginTop:'10 px'}}>{points}</h3>
            </RightNav>
          </>
        ) : (
          <></>
        )}
      </NavBar>
    </> : <></> } </>
  );
};

export default NavBar;
