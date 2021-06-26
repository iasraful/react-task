import React from "react";
import { useHistory } from "react-router-dom";

const Card = ({ country }) => {
    const {name, region, capital, flag} = country;
    const history = useHistory();
    const showDetails = name =>{
        const url = `details/${name}`;
        history.push(url);

    }
  return (
    <div className="col-md-6 mb-2 mt-5">
        <div className="card p-2" >
            <img src={flag} className="card-img-top img-fluid" style={{height:'350px'}} alt="asdf" />
            <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <h6 className="card-text">
                    Capital: {capital}
                </h6>
                <p className="card-text">Region: {region}</p>
                <button onClick={()=> showDetails(name)} href="/" className="btn btn-primary">Detalis</button>
            </div>
        </div>
    </div>
  );
};

export default Card;
