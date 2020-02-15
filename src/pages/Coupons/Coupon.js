import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

import { toast } from "react-toastify";
import moment from "moment";

import LoadingIndicator from "../../components/LoadingIndicator";
import Button from "../../components/Button";
import Circle from "../../components/Circle";
import Page from "../../components/Page";

import styled from "styled-components";

const Coupon = () => {
  let { id } = useParams();
  const history = useHistory();
  console.log("Coupon", id);

  const [isLoading, setIsLoading] = useState(true);
  const [coupon, setCoupon] = useState();
  const [bought, setBought] = useState(false);
  const [purchaseID, setPurchaseID] = useState(false);
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
        console.log("ERROR: ", error);
        setIsLoading(false);
      });
  }, []);

  const BuyCoupon = () => {
    axios({
      method: "POST",
      url: `http://localhost:5000/api/purchases/create/${id}`,
      data: {
        user_id: user
      }
    })
      .then(response => {
        console.log(response.data);
        toast.success(`Coupon purchased`, {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
        setPurchaseID(response.data.id);
        setBought(true);
      })
      .catch(error => {
        console.error(error);
        toast.error(`Unable to purchase coupon, ${error}`, {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true
        });
      });
  };

  const RedeemCoupon = () => {
    console.log("purchase", purchaseID);
    console.log("user", user);
    axios({
      method: "POST",
      url: `http://localhost:5000/api/purchases/update/${purchaseID}`,
      data: {
        user_id: user
      }
    })
      .then(response => {
        console.log(response);
        toast.success(`Coupon redeemed`, {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
        const { coupon, status, qr_string } = response.data;
        history.push("/redeem", {
          name: coupon.name,
          code: qr_string,
          description: coupon.description,
          status
        });
      })
      .catch(error => {
        console.error(error);
        toast.error(`Unable to redeem coupon, ${error}`, {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true
        });
      });
  };

  const CouponPic = styled.img`
    width: 100vw;
    max-width: 600px;
    height: 200px;
  `;

  return (
    <Page className="page">
      {isLoading ? (
        <LoadingIndicator></LoadingIndicator>
      ) : (

        <>
          <CouponPic></CouponPic>

          <h2>{coupon.name}</h2>
          <Circle inputColor="#EAC1B4">
            <h1>{coupon.deal}%</h1>
          </Circle>
          <h3>Expires: {moment(coupon.expiration).format("Do MMMM YYYY")} </h3>
          <p>{coupon.description}</p>
          <h3>{coupon.points}</h3>
          {bought ? (
            <Button onClick={RedeemCoupon}>Redeem Coupon</Button>
          ) : (
            <Button text="Buy Coupon" onClick={BuyCoupon}>
              Buy Coupon
            </Button>
          )}
        </>

      )}
    </Page>
  );
};

export default Coupon;
