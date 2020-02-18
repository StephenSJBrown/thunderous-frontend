import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

import axios from "axios";
import styled from "styled-components";
import { toast } from "react-toastify";
import moment from "moment";

import Page from "../../components/Page";
import LoadingIndicator from "../../components/LoadingIndicator";
import couponicon from '../../icons/couponicongreen.svg'
import empty from "../../images/empty.svg";

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
      .get(`https://ninja-recyclo.herokuapp.com//api/purchases/index/${id}`)
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
    width: 100%;
    max-width: 276px;
  `;

  const Img = styled.img`
    margin: 6px;
    height: 36px;
    width: 36px;
    object-fit: cover;
    border-radius: 50%;
  `;

  return (
    <Page className="page">
      {isLoading ? (
        <LoadingIndicator></LoadingIndicator>
      ) : (
        <>
          <img src={couponicon}/>
          <h2>My Coupons</h2>
          {purchases.length ? (
            <>
              {" "}
              <p>You got coupons</p>{" "}
              {purchases.map(purchase => (
                <Link to={{pathname: "/redeem", state: {
                  name: purchase.coupon.store.name,
                  code: purchase.qr_string,
                  description: purchase.coupon.description,
                  status: purchase.status
                 }}}>
                  <Coupon>
                    <Store>
                      <h2>
                        {purchase.coupon.store.name.charAt(0).toUpperCase()}
                        {purchase.coupon.store.name.substr(1)}
                      </h2>
                      <Img src={purchase.coupon.store.logo} alt="" />
                    </Store>
                    <h3>{purchase.coupon.name}</h3>
                    <p>
                      Expiry date:{" "}
                      {moment(purchase.coupon.expiration).format(
                        "Do MMMM YYYY"
                      )}
                    </p>
                  </Coupon>
                </Link>
              ))}{" "}
            </>
          ) : (
            <>
              <p>Ain't got no coupons</p>
              <img alt="" src={empty} />
            </>
          )}{" "}
        </>
      )}
    </Page>
  );
};

export default MyCoupons;
