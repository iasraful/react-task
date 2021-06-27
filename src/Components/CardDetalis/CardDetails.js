import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  const { name } = useParams();
  const [details, setDetails] = useState([]);
  const { capital, timezones, topLevelDomain, region, flag, population, area } = details;
  useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetails(data[0]));
  }, [name]);
  return (
    <div className="container">
      <div className="row">
      <div className="col-md-12">
        <div className="card bg-dark text-white">
          <img src={flag} className="card-img" alt="..." />
          <div className="card-img-overlay">
            <h1 className="card-title"> {name}</h1>
            <h5 className="card-title">Capital: {capital}</h5>
            <h5 className="card-title">Region: {region}</h5>
            <h5 className="card-title">Time-Zone: {timezones}</h5>
            <h5 className="card-title">Population: {population}</h5>
            <h5 className="card-title">Area: {area}</h5>
            <p className="card-text">Top Domain:{topLevelDomain}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CardDetails;
