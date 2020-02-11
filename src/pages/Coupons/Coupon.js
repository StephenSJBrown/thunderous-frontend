import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import moment from 'moment'

import LoadingIndicator from "../../components/LoadingIndicator";

const Coupon = () => {
  let { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [coupon, setCoupon] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/coupons/${id}`)
      .then(result => {
        // console.log(result.data);
        setCoupon(result.data);
        setIsLoading(false);
      })
      .catch(error => {
        // console.log("ERROR: ", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingIndicator></LoadingIndicator>
      ) : (
        <>
          <h2>{coupon.name}</h2>
          <h2>{coupon.deal}</h2>
          <h3>Expires: {moment(coupon.expiration).format('Do MMMM YYYY')} </h3>
          <p>{coupon.description}</p>
          <h3>{coupon.points}</h3>
        </>
      )}
    </>
  );
};

export default Coupon;
