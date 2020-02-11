import React, { useState } from "react";
import LoadingIndicator from '../../components/LoadingIndicator'

const Centres = () => {
  // API ADDRESS:
  // https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key={}&input=recycling+centre&inputtype=textquery&language=en-GB&fields=formatted_address,geometry,icon,name,permanently_closed,place_id,plus_code,types&locatiobias=ipbias

  // https://www.google.com/maps/place/?q=place_id:ChIJ6eTsxytPzDERW07hq6W8cBA

  const [placeID, setPlaceID] = useState("");
  const [name, setName] = useState("");


  return (
    <>
      <h1>Centres</h1>
      <p>Your nearest recycling centre is: </p>
      <h2>{name}</h2>
      <a href="https://www.google.com/maps/place/?q=place_id:{placeID}">
        Go there
      </a>
    </>
  );
};
