import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";
import styled from "styled-components";
import { toast } from "react-toastify";
import moment from "moment";

import Page from "../../components/Page";
import LoadingIndicator from "../../components/LoadingIndicator";

const MyCoupons = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [purchases, setPurchases] = useState([]);

  const id = localStorage.getItem("jwt");

  console.log(id);

  if (!id) {
    history.push("/");
  }

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/purchases/index/${id}`)
      .then(result => {
        console.log(result.data);
        setPurchases(result.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.log("ERROR: ", error);
        toast.error(`Unable to retrieve coupons, ${error}`, {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true
        });
        setIsLoading(false);
      });
  }, []);

  const Coupon = styled.div`
    background: #fffcdd;
    border-radius: 40px;
    width: 324px;
    /* height: 156px; */
    margin: 12px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 12px 24px;
  `;

  const Store = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 276px;
  `;

  return (
    <Page>
      {isLoading ? (
        <LoadingIndicator></LoadingIndicator>
      ) : (
        <>
          <h2>My Coupons</h2>
          {purchases ? (
            <>
              {" "}
              <p>You got coupons</p>{" "}
              {purchases.map(purchase => (
                <Coupon>
                  <Store>
                    <h2>{purchase.coupon.store.name}</h2>
                    <img src={purchase.coupon.store.logo}></img>
                  </Store>
                  <h3>{purchase.coupon.name}</h3>
                  <p>
                    Expiry date:{" "}
                    {moment(purchase.coupon.expiration).format("Do MMMM YYYY")}
                  </p>
                </Coupon>
              ))}{" "}
            </>
          ) : (
            <p>Ain't got no coupons</p>
          )}{" "}
        </>
      )}
    </Page>
  );
};

export default MyCoupons;
