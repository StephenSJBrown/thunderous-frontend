import React, { useState, useContext} from "react";
import { Route } from "react-router-dom";

import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer, toast } from 'react-toastify';

import Navbar from "./components/Navbar";

import Routes from "./transitions/Routes";

import "./App.css";

function App() {

  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("jwt") !== null
  );

  return (
    <>
      <ToastContainer />
      <Navbar toast={toast} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes/>
    </>
  );
}

export default App;
