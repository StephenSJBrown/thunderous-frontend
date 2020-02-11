import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import Coupon from "../../components/Coupon";

const Store = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [coupons, setCoupons] = useState([]);

  let { store } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/stores/store/mcdonald`)
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
    <>
      <h1>Store {store.toUpperCase()}</h1>
      {coupons.map(coupon => (
        <>
          <Link to={`/coupon/${coupon.id}`}>
            <Coupon
              name={coupon.name}
              deal={coupon.deal}
              points={coupon.points}
            />
          </Link>
        </>
      ))}
    </>
  );
};

export default Store;
