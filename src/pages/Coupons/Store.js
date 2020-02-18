import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Page from "../../components/Page";
import Coupon from "../../components/Coupon";
import LoadingIndicator from "../../components/LoadingIndicator";

const Store = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [coupons, setCoupons] = useState([]);

  let { store } = useParams();

  useEffect(() => {
    axios
      .get(`https://ninja-recyclo.herokuapp.com//api/stores/store/${store}`)
      .then(result => {
        console.log(result.data.coupons);
        setCoupons(result.data.coupons);
        setIsLoading(false);
      })
      .catch(error => {
        console.log("ERROR: ", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <Page className="page">
      {isLoading ? (
        <LoadingIndicator></LoadingIndicator>
      ) : (
        <>
          {" "}
          <h1>Store {store.toUpperCase()}</h1>
          {coupons.map(coupon => (
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
    </Page>
  );
};

export default Store;
