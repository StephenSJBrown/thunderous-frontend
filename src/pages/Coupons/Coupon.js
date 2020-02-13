import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import {toast} from 'react-toastify'
import moment from 'moment'

import LoadingIndicator from "../../components/LoadingIndicator";

const Coupon = () => {
  let { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [coupon, setCoupon] = useState();
  const user = localStorage.getItem("jwt");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/coupons/${id}`)
      .then(result => {
        console.log(result.data);
        setCoupon(result.data);
        setIsLoading(false);
      })
      .catch(error => {
        // console.log("ERROR: ", error);
        setIsLoading(false);
      });
  }, []);

  const BuyCoupon = (id) => {
    axios({
      method: 'POST',
      url: `http://localhost:5000/api/purchases/create/${id}`,
      data: {
          user_id: user
      }
  })
      .then(response => {
          console.log(response)
          toast.success(`Coupon purchased`, {
              position: "top-left",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
          });
      })
      .catch(error => {
          console.error(error)
          toast.error(`Unable to purchase coupon, ${error}`, {
              position: "top-left",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
          });
      }
      )
  }



  return (
    <>
      {isLoading ? (
        <LoadingIndicator></LoadingIndicator>
      ) : (
        <div>
          <h2>{coupon.name}</h2>
          <h2>{coupon.deal}</h2>
          <h3>Expires: {moment(coupon.expiration).format('Do MMMM YYYY')} </h3>
          <p>{coupon.description}</p>
          <h3>{coupon.points}</h3>
          <button onClick={BuyCoupon}></button>
        </div>
      )}
    </>
  );
};

export default Coupon;
