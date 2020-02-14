import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import LoadingIndicator from "../../components/LoadingIndicator";
import Coupon from "../../components/Coupon";
import Store from "../../components/Store";
import SeeAll from "../../components/SeeAll";

import food from "../../icons/food.png"
import clothing from "../../icons/clothing.png"
import hotels from "../../icons/hotel.png"
import experience from "../../icons/helicopter.png"
import travel from "../../icons/plane.png"
import insurance from "../../icons/umbrella.png"
import couponcontainer from "../../icons/couponcontainer.png"


const couponStyle={
  backgroundColor:'#EAC1B4',
  width: '45vw',
  clipPath: 'polygon(0 0, 100% 0, 87% 50%, 100% 100%, 71% 100%, 30% 100%, 0 100%, 13% 50%)',
  width:'50%',
  margin: '0 0 5vh 0', 
  borderRadius: '50px',
  height:"19vh",
  lineHeight : "6vh"
  // backgroundImage:`url(${couponcontainer})`,
  // height: "100px"
}
const couponContainerStyle = {
  // backgroundColor: 'green',
  width: '100vw',
  // display: 'flex',
  // flexWrap: 'wrap',
  // backgroundColor:'#F6FFFB',

}

const storeNameStyle={
  textAlign:'center',
  fontFamily: '"Dosis", sans-serif'
}

const Category = () => {
  let { category } = useParams()

  const [stores, setStores] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/stores/${category}`)
      .then(result => {
        console.log(result.data.stores);
        setStores(result.data.stores);
        setIsLoading(false);
      })
      .catch(error => {
        console.log("ERROR: ", error);
        setIsLoading(false);
      });
  }, []);

  const imageSwitch = {
    food: food,
    clothing: clothing,
    hotels: hotels,
    experience: experience,
    travel: travel,
    insurance: insurance

  }


  return (
    <>
      {/* <h1>{category.toUpperCase()}</h1> */}
      <div style={{textAlign:'center'}}>
        <img src={imageSwitch[category.toLowerCase()]} />
      </div>
      {isLoading ? (
        <LoadingIndicator></LoadingIndicator>
      ) : (
          <>
            {stores.map(store => (
              <div>
                <h1 style={storeNameStyle}><img src={`"${store.logo}.png"`} /> {store.name}</h1>
                <div style={ couponContainerStyle }>
                  
                  {store.coupons.length == 0 ? (
                    <h2> No coupons </h2>
                  ) : (
                      <>
                      <div style={{ width:"100vw", display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"center"}}>

                        {store.coupons.map(coupon => (
                          <div style={couponStyle}>
                            <Coupon
                              name={coupon.name}
                              deal={coupon.deal}
                              points={coupon.points}
                              id={coupon.id}
                            />
                          </div>
                        ))}
                      </div>
                      </>
                    )}
                  {store.coupons.length > 2 ? (
                    <SeeAll store={store.name} id={store.id} ></SeeAll>
                  ) : (
                      <></>
                    )}
                </div>
              </div>
            ))}
          </>
        )}
    </>
  );
};

export default Category;
