import React from "react";
import { Link } from "react-router-dom"
import LoadingIndicator from '../components/LoadingIndicator'
import HomeIcon from '../icons/homeicon.png'
import CentersIcon from '../icons/locationicon.png'
import DepositIcon from '../icons/weighticon.png'
import CouponIcon from '../icons/coupons.png'

const HomePage = () => {

  const HeaderStyle={
    textAlign:'center'
  }
  
  const divstyle = {
    textAlign: 'center',
    marginTop:'45px'
  }

  // const BackgroundStyle = {
  // clipPath: 'polygon(66 % 67 %, 100 % 13 %, 100 % 100 %, 0 100 %)',
  // backgroundColor: '#B0E6CE',
  // backgroundImage: 'linear - gradient(to bottom right, #B0E6CE, #F7FFFB)',
  // height: '100vh',z
  // width: '100vw',
  // position: 'fixed',
  // top: '0',
  // left: '0'
  // }


  const MainButtonStyle = {
    width: '251px',
    height: '92px',
    borderRadius: '30px',
    backgroundColor: '#EAC1B4',
    marginTop: '40px',
    border: 'none',
    fontSize: '25px',
    fontFamily: '"Dosis", sans-serif',
    cursor:'pointer'
  }


  return (
    <>
    <header style={HeaderStyle}>
      <img  src={HomeIcon} />
    </header><br />
    <div style={divstyle}>
      <Link to="/centres"><button style={MainButtonStyle}>Centres <img src={CentersIcon} /></button></Link><br />
      <Link to="/deposit"><button style={MainButtonStyle}>Deposit  <img src={DepositIcon} /></button></Link><br />
      <Link to="/coupons"><button style={MainButtonStyle}>Coupons  <img src={CouponIcon} /></button></Link><br />
    </div>
    {/* <div style={BackgroundStyle}></div> */}
    </>
  )
};

export default HomePage;
