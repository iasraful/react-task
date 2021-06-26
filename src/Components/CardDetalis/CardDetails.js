import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  const { name } = useParams();
  const [details, setDetails] = useState([]);
  const {capital, topLevelDomain, subregion, flag, population, area } = details;
  useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [name]);
console.log(details);
  return (
      <div className="container">

    {/* <div className="row">
      <div className="col-md-12">
        <div className="card bg-dark text-white">
          <img src={flag} className="card-img" alt="..." />
          <div className="card-img-overlay">
            <h3 className="card-title">Capital: {capital}</h3>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">Last updated 3 mins ago</p>
          </div>
        </div>
      </div>
    </div> */}
    </div>
  );
};

export default CardDetails;
