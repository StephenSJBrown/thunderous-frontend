import React from "react";
import { Link } from "react-router-dom";

const SeeAll = ({ store }) => {

  return (
    <>
      <Link to={`/store/${store}`}>
        <h3>See All</h3>
      </Link>
    </>
  );
};

export default SeeAll;
