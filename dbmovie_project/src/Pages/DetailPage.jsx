import React, {useEffect, useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import { apiGetMoviesNowPlaying, apiGetMoviesSearchMovie } from "../store/action"
// import CardComponent from "../ComponenPages/CardComponent"

export default function DetailPage(){

  const detailMovies = useSelector(state => state.detailMovies)   
 
 
  console.log(detailMovies,"<==data dari reducer detail");

     return (       
     <>
       <h1>Detail Page</h1>
          
           
     
     </>     
 
     )
 
 
 }