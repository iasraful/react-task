import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const Body = () => {
  const [countrys, setCountrys] = useState([]);

  useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/all`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountrys(data));
  }, []);
  console.log(countrys);

  return (
    <div>
     	<div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8">
                            <form className="card card-md">
                                <div className="card-body row no-gutters align-items-center">
                                    <div className="col-auto">
                                        <i className="fas fa-search h4 text-body"></i>
                                    </div>
                                
                                    <div className="col">
                                        <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search Your Country..."/>
                                    </div>
                                    
                                    <div className="col-auto">
                                        <button className="btn btn-lg btn-success" type="submit">Search</button>
                                    </div>
                                    
                                </div>
                            </form>
                        </div>
                       
                    </div>

                    
                    <div className="container">
                        <div className="row">
                            {
                                countrys.map(country => <Card country = {country}  key ={country.numericCode}/>)
                            }
                        </div>
                    </div>

</div>
     
  );
};

export default Body;
