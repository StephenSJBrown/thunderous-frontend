
import React, { useState,useContext,createContext} from "react";

import { Route } from "react-router-dom";

import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer, toast } from 'react-toastify';

import Navbar from "./components/Navbar";

import Routes from "./transitions/Routes";

import "./App.css";

export const UserContext = createContext(null)

function App() {
  
  
  const [points, setPoints] = useState(0)
  const [username, setUsername] = useState("stephen")
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("jwt") !== null
  );
  console.log("asdasd")
  console.log(username)
  return (
    <UserContext.Provider value={{
      points,
      setPoints,
      username,
      setUsername
    }}  >
      <ToastContainer />
      <Navbar toast={toast} loggedIn={loggedIn} setLoggedIn={setLoggedIn} points={points} username={username}/>
      <Routes/>
    </UserContext.Provider>
  );
}

export default App;
