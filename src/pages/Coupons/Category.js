import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import styled from "styled-components";

import LoadingIndicator from "../../components/LoadingIndicator";
import Coupon from "../../components/Coupon";
import Store from "../../components/Store";
import Page from '../../components/Page'
import SeeAll from "../../components/SeeAll";

import food from "../../icons/food.svg";
import clothing from "../../icons/clothing.svg";
import hotels from "../../icons/hotels.svg";
import experience from "../../icons/experience.svg";
import travel from "../../icons/travel.svg";
import insurance from "../../icons/insurance.svg";

const Category = () => {
  let { category } = useParams();

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
  };

  const Logo = styled.img`
    height: 36px;
    width: 36px;
    object-fit: contain;
  `;

const Top = styled.div`
display: flex;
align-items: center;
`;

  return (
    <Page>
      {/* <h1>{category.toUpperCase()}</h1> */}
      <div style={{ textAlign: "center" }}>
        <img src={imageSwitch[category.toLowerCase()]} />
      </div>
      {isLoading ? (
        <LoadingIndicator></LoadingIndicator>
      ) : (
        <>
          {stores.map(store => (
            <>
            <Top>
              <Logo src={store.logo} />
              <h2>
                {store.name.charAt(0).toUpperCase()}
                {store.name.substr(1)}
              </h2>
              </Top>
              {store.coupons.length == 0 ? (
                <h2> No coupons </h2>
              ) : (
                <>
                  {store.coupons.map(coupon => (
                    <div style={{ background: "red" }}>
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
                <SeeAll store={store.name} id={store.id}></SeeAll>
              ) : (
                <></>
              )}
            </>
          ))}
        </>
      )}
    </Page>
  );
};

export default Category;
