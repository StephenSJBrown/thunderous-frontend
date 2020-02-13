<<<<<<< HEAD
import React, { useState, useEffect } from "react";
=======
import React, { useState, useEffect, Component } from "react";
>>>>>>> login,signin,homepage,coupons frontend semi-complete.
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import Header from "../../components/Header";
import LoadingIndicator from "../../components/LoadingIndicator";
import Coupon from "../../components/Coupon";
import Store from "../../components/Store";
import SeeAll from "../../components/SeeAll";
import food from "../../icons/food.png"
import clothing from "../../icons/clothing.png"

const Category = () => {
  let { category } = useParams();

  const [stores, setStores] = useState([
    {
      id: "1",
      storename: "mcdonalds",
      logo: "someurl",
      coupons: [
        {
          category: "food",
          couponname: "McRabbit Meal",
          deal: 25,
          points: 250
        },
        {
          category: "food",
          couponname: "McRabbit Meal",
          deal: 25,
          points: 250
        },
        {
          category: "food",
          couponname: "McJabbit Meal",
          deal: 55,
          points: 550
        }
      ]
    },
    {
      storename: "mcdonalds",
      logo: "someurl",
      coupons: [
        {
          category: "food",
          couponname: "McRabbit Meal",
          deal: 25,
          points: 250
        },
        {
          category: "food",
          couponname: "McJabbit Meal",
          deal: 55,
          points: 550
        }
      ]
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  // Api to pull all the coupons and respective stores for their category, utilising the {category} passed in, and setStores to result
  // {'store-name':'mcdonalds',
  // 'store-logo':'someurl',
  // 'coupons':[{'category':'',"coupon-name":'McRabbit Meal', 'coupon-deal':25, 'coupon-points':250},
  // {'category':'',"coupon-name":'McRabbit Meal', 'coupon-deal':25, 'coupon-points':250}]

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
  }

  return (
    <>
      <Header />
      <h1>{category.toUpperCase()}</h1>
      <img src={imageSwitch[category.toLowerCase()]} />
      {isLoading ? (
        <LoadingIndicator></LoadingIndicator>
      ) : (
          <>
            {stores.map(store => (
              <>
                <h1>{store.name}</h1>
                <img src={`"${store.logo}.png"`} />
                {store.coupons.length == 0 ? (
                  <h2> No coupons </h2>
                ) : (
                    <>
                      {store.coupons.map(coupon => (
                        <>
                          <Coupon
                            name={coupon.name}
                            deal={coupon.deal}
                            points={coupon.points}
                            id={coupon.id}
                          />
                        </>
                      ))}
                    </>
                  )}
                {store.coupons.length > 2 ? (
                  <SeeAll store={store.name} id={store.id} ></SeeAll>
                ) : (
                    <></>
                  )}
              </>
            ))}
          </>
        )}
    </>
  );
};

export default Category;
