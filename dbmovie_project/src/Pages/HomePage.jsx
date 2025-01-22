import React, {useEffect, useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import { apiGetMoviesNowPlaying, apiGetMoviesSearchMovie } from "../store/action"
import CardComponent from "../ComponenPages/CardComponent"

export default function HomePage(){

 const dataMovies = useSelector(state => state.dataMovies)   
 const dispatch = useDispatch()

 console.log(dataMovies,"<==data dari reducer");
 

  useEffect(() => {
        dispatch(apiGetMoviesNowPlaying())

    },[])


     return (       
     <>
       <h1>
  {`Discover Your Next Favorite Movie`.split('').map((char, index) => (
    <span key={index}>{char}</span>
  ))}
</h1>
           {/* <p>{JSON.stringify(dataMovies)}</p> */}
       
           <div className="row">
           {/* <CardComponent/>  */}
               {
       
                   dataMovies.map(el => (
                   <>      
                      
                   <CardComponent key={el.id} id={el.id} original_title={el.original_title} popularity={el.popularity} poster_path={el.poster_path} overview={el.overview} /> 
                  
                   </>   
                   ))
               }
           </div>
           
     
     </>     
 
     )
 
 
 }