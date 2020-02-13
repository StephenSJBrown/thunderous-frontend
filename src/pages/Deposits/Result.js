import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

const Result = () => {
  const history = useHistory();
  const { state: dataFromPreviousPage = 0 } = useLocation();
  const { weight, points } = dataFromPreviousPage;

  if (dataFromPreviousPage == 0) {
    history.push("/");
  }

  return (
    <>
      <h2>You deposited</h2>
      <h2>{weight}</h2>
      <h2>kg</h2>
      <h3>and recieved</h3>
      <h2>{points} points</h2>
      <Link to="/coupons">
        <p>See coupons</p>
      </Link>
    </>
  );
};

export default Result;
