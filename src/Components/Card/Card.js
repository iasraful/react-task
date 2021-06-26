import React from "react";

const Card = ({ country }) => {
    const {name, population, region, capital, flag, numericCode} = country
  return (
    <div className="col-md-6 mb-2 mt-5">
        <div className="card p-2" >
            <img src={flag} className="card-img-top img-fluid" style={{height:'350px'}} alt="asdf" />
            <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <h6 className="card-text">
                    Capital: {capital}
                </h6>
                <a href="/" className="btn btn-primary">
                Details
                </a>
            </div>
        </div>
    </div>
  );
};

export default Card;
