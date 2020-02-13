import React from "react";
import { Link } from 'react-router-dom'

import Category from "../../components/Category";


const divStyle={
  display:'flex',
  flexWrap:'wrap',
  justifyContent:'center',
  marginTop:'60px', 
}


const Coupons = () => {
  return (
    <>
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
