import React, { useState, useEffect } from "react";
import axios from 'axios'

// import Script from 'react-load-script'

import LoadingIndicator from "../../components/LoadingIndicator";

const Centres = () => {
    let key = process.env.REACT_APP_MAP
    // console.log(key)

  // https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key={key}&input=recycling+centre&inputtype=textquery&language=en-GB&fields=formatted_address,geometry,icon,name,permanently_closed,place_id,plus_code,types&locatiobias=ipbias

  // https://www.google.com/maps/place/?q=place_id:ChIJ6eTsxytPzDERW07hq6W8cBA

  const [placeID, setPlaceID] = useState("");
  const [name, setName] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=${key}&input=recycling+centre&inputtype=textquery&language=en-GB&fields=formatted_address,geometry,icon,name,permanently_closed,place_id,plus_code,types&locatiobias=ipbias`)
      .then(result => {
        console.log(result);
        setIsLoading(false);
      })
      .catch(error => {
        console.log("ERROR: ", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <h1>Centres</h1>
      <p>Your nearest recycling centre is: </p>
      {isLoading ? (
        <LoadingIndicator></LoadingIndicator>
      ) : (
        <>
          <h2>{name}</h2>
          <a href="https://www.google.com/maps/place/?q=place_id:{placeID}">
            Go there
          </a>
        </>
      )}
    </>
  );
};

export default Centres
