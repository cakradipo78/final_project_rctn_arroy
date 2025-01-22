import React, {useEffect, useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import { apiGetMoviesNowPlaying, apiGetMoviesSearchMovie } from "../store/action"
// import CardComponent from "../ComponenPages/CardComponent"

import '../../src/App.css'


export default function DetailPage(){

  const detailMovies = useSelector(state => state.detailMovies)   
 
 
  console.log(detailMovies
    ,"<==data dari reducer detail");


    // const [dataCompany , setdataCompany] = useState([])

    // useEffect (()=>{
    //   setdataCompany(detailMovies.production_companies[0].name)

    //   console.log(detailMovies.production_companies[0].name,"company terpanggl >>>>");
      

    // },[detailMovies])
     return (       
     <>
<div className="bg-info">

       <h1 className="text-center bg-info text-decoration-underline" >Detail Movie & Information</h1><br />
          



      <div class="container fw-bold">
        <div class="row text-center">
          <div class="col-4 bg-warning ">
            Image
          </div>        
          <div class="col-8 bg-warning fs-5">
            DETAIL INFO
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-4 bg-danger">
          {/* <img class="img-fluid" style={{ width: '350px', height: '400px' }} src={`https://image.tmdb.org/t/p/w500/${detailMovies.poster_path}`}  alt="Movie Poster" /> */}

          {/* <img src={`https://image.tmdb.org/t/p/w500/${detailMovies.poster_path}`} className ="img-fluid pt-3 mb-5" alt="Responsive image"></img> */}
                <img
                  src={`https://image.tmdb.org/t/p/w500/${detailMovies.poster_path}`}
                  className="card-img-top img-hover"
                  alt={detailMovies.original_title}
                />
              
          </div>
          <div className="col-8">

            <div className="row">
              <div className="col-3">
              <p className="text-left">Title  </p>         
              </div>
              <div className="col-9">
                <p>{ detailMovies.original_title}</p>
              </div>            
             </div>

             <div className="row">
              <div className="col-3">
              <p className="text-left">Detail  </p>         
              </div>
              <div className="col-9">
                <p> {detailMovies.overview}</p>
              </div>            
             </div>

             <div className="row">
              <div className="col-3">
              <p className="text-left">Home Page  </p>         
              </div>
              <div className="col-9">
                <p>  {detailMovies.homepage}</p>
              </div>            
             </div>

             <div className="row">
              <div className="col-3">
              <p>Release Date  </p>         
              </div>
              <div className="col-9">
               <p> {detailMovies.release_date}</p>
              </div>            
             </div>

             <div className="row">
              <div className="col-3">
              <p>Rating  </p>         
              </div>
              <div className="col-9">
                <p> O O O O O</p>
              </div>            
             </div>

             <div className="row">
              <div className="col-3">
              <p>Country  </p>         
              </div>
              <div className="col-9">
              <p> {detailMovies.origin_country}</p>
              </div>            
             </div>
                   
             <div className="row">
              <div className="col-3">
              <p>Budget  </p>         
              </div>
              <div className="col-9">
              <p className="text-left"> {detailMovies.budget}</p>
              </div>            
             </div>


             <div className="row">
              <div className="col-2">
              {/* <p>Budget  </p>          */}
              </div>
              <div className="col-10">
                <br /><br /><br />
              <button type="button" className="btn btn-primary">Buy Ticket now</button>
              <button type="button" className="btn btn-primary ms-5">View Triler</button>
              </div>            
             </div>


           
                       
                    
                    
             
                     
          </div>          
        </div>


      </div>                          

      </div>



           
     
     </>     
 
     )
 
 
 }