import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import Header from "../../components/Header";
import LoadingIndicator from "../../components/LoadingIndicator";
import Coupon from "../../components/Coupon";
import Store from "../../components/Store";
import SeeAll from "../../components/SeeAll";

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

  //   useEffect(() => {
  //     axios
  //       .get(`http://localhost:5000/api/stores/${category}`)
  //       .then(result => {
  //         console.log(result);
  //         setStores(result.data);
  //         setIsLoading(false);
  //       })
  //       .catch(error => {
  //         console.log("ERROR: ", error);
  //         setIsLoading(false);
  //       });
  //   }, []);

  console.log(stores);

  return (
    <>
      <Header />
      <h1> {category.toUpperCase()}</h1>
      {isLoading ? (
        <LoadingIndicator></LoadingIndicator>
      ) : (
        <>
          {stores.map(store => (
            <>
              <h1>{store.storename}</h1>
              <img src={`"${store.logo}.png"`} />
              {store.coupons.map(coupon => (
                <>
                  <Coupon
                    name={coupon.couponname}
                    deal={coupon.deal}
                    points={coupon.points}
                  />
                </>
              ))}
              { (store.coupons.length > 2) 
              ? <SeeAll store={store.storename} id={store.id}></SeeAll>
              : <></>
              }
            </>
          ))}
        </>
      )}
    </>
  );
};

export default Category;
