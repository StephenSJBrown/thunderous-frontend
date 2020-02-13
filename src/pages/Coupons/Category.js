import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import Header from "../../components/Header";
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
      <Header />
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
                <h1>{store.name}</h1>
                <img src={`"${store.logo}.png"`} />
                {store.coupons.length == 0 ? (
                  <h2> No coupons </h2>
                ) : (
                    <>
                      {store.coupons.map(coupon => (
                        <div style={{background: 'red'}}>
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
            ))}
          </>
        )}
    </>
  );
};

export default Category;
