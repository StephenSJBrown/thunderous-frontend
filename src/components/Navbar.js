import React, { useState} from "react";
import styled from "styled-components";
import { Link, useHistory, useLocation } from "react-router-dom";

import usericon from "../icons/usericon.png"
import applogo from "../icons/screenshotsmall.png"
import logouticon from "../icons/logouticongreen.svg"

const applogoStyle = {
  position: "absolute",
  left: "5px",
  top: "5px"
};

const NavBar = ({ toast }) => {
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
    max-width: 10vw;
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
          <Link to="/profile">
            <img src={usericon} alt="" />
          </Link>
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
              <Linker  onClick={logOut}>
                <img style={{marginTop:'10px'}} src={logouticon}/>
              </Linker>
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
