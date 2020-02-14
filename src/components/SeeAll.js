import React from "react";
import { Link } from "react-router-dom";
import SeeMoreArrow from "../icons/couponarrow.png"

const SeeAll = ({ store }) => {

  return (
    <>
      <Link to={`/store/${store}`}>
        {/* <h3>See All</h3> */}
        <img src={SeeMoreArrow} alt="See All"/>
      </Link>
    </>
  );
};

export default SeeAll;
