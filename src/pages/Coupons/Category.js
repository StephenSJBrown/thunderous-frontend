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


const couponStyle={
  backgroundColor:'#EAC1B4',
  width: '30vw',
  margin: '5vw',
  borderRadius: '30px'
}
const couponContainerStyle = {
  backgroundColor: 'green',
  width: '100vw',
  display: 'flex',
  flexWrap: 'wrap',
  backgroundColor:'#F6FFFB'
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
