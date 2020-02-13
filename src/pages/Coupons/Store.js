import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import Page from '../../components/Page'
import Coupon from "../../components/Coupon";

const Store = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [coupons, setCoupons] = useState([]);

  let { store } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/stores/store/${store}`)
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
    <Page>
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
    </Page>
  );
};

export default Store;
