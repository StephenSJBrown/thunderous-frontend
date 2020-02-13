import React from "react";
import { Link } from 'react-router-dom'

import Category from "../../components/Category";
import Header from '../../components/Header'
// import food from '../../icons/Food.png'


const divStyle={
  display:'flex',
  flexWrap:'wrap',
  justifyContent:'center',
  marginTop:'60px',
  
 
}

const headerStyle={
  textAlign:'center'

}

const Coupons = () => {
  return (
    <>
      <div style={headerStyle}>
        <Header name="coupons"/>
      </div>
      <div style={divStyle} >
          <Category name="food" />
          <Category name="clothing" />
          <Category name="hotels" />
          <Category name="experience" />
          <Category name="travel" />
          <Category name="insurance" />
      </div>
    </>
  );
};

export default Coupons;
