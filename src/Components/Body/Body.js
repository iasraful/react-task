import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Card from "../Card/Card";
import PaginateBodyCss from './Body.module.css'

const Body = () => {
  const [countrys, setCountrys] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const countryPerPage = 10;
  const visitedPage = pageNumber * countryPerPage;

  // For ReactPaginate >> bellow
  const pageCount = Math.ceil(countrys.length / countryPerPage);
  const changePages = ({selected}) => {
    setPageNumber(selected)
  }

  const displayCountry = countrys.slice(visitedPage, visitedPage + countryPerPage)
  .map(countrys => {
      return(
        <Card countrys = {countrys} key ={countrys.numericCode}/>)
      
  })

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
                               displayCountry
                            }
                        </div>
                    </div>


                    <ReactPaginate
                    previousLabel= {"Previous"}
                    nextLabel= {"Next"}
                    pageCount={pageCount}
                    onPageChange= {changePages}
                    containerClassName= {PaginateBodyCss.paginationBtn}
                    previousClassName= {PaginateBodyCss.previousBtn}
                    nextClassName= {PaginateBodyCss.nextBtn}
                    disabledClassName= {PaginateBodyCss.paginationDisabled}
                    activeClassName= {PaginateBodyCss.paginationActive}
                    />

</div>
     
  );
};

export default Body;
