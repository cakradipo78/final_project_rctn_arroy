import axios from "axios"
const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'

export const apiGetMoviesNowPlaying = (paramData = "now_playing") => {

  console.log(paramData,"aku ter API di get movie");
  
return async (dispatch)=> {

    try {
        const data = await axios({
            method: 'GET',
            // https://api.themoviedb.org/3/movie/popular?language=en-US&page=1
            url: `https://api.themoviedb.org/3/movie/${paramData}?language=en-US&page=1`,
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2RjNDJmZTM2YzUxZGM1N2IyYWVhMTRjZjEzMzJmMiIsIm5iZiI6MTczNjk5NTAyOS4wMjgsInN1YiI6IjY3ODg3MGQ1ODhjNTU4NTZkNTFkM2IzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vAgeTjVpnstOHP79SBvdkOPCqWcnhni1W8v8aBSw16c'
              }

        })

        console.log(data,"===>ini data dropdown");
        dispatch({
        type: "CHANGE_DATA_MOVIES",
        payload: data.data.results

        })
        
    } catch (error) {
        
    }


}

// return {

//     type: "coba",
//     payload: "hahaha"
// }


}






export const apiGetMoviesSearchMovie = (paramData = "search_movie") => {

    console.log(paramData,"aku ter API Search");
    
  return async (dispatch)=> {
  
      try {
          const data = await axios({
              method: 'GET',
              // https://api.themoviedb.org/3/movie/popular?language=en-US&page=1
              url: `https://api.themoviedb.org/3/search/movie?query=${paramData}&include_adult=false&language=en-US&page=1`,
              headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2RjNDJmZTM2YzUxZGM1N2IyYWVhMTRjZjEzMzJmMiIsIm5iZiI6MTczNjk5NTAyOS4wMjgsInN1YiI6IjY3ODg3MGQ1ODhjNTU4NTZkNTFkM2IzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vAgeTjVpnstOHP79SBvdkOPCqWcnhni1W8v8aBSw16c'
                }
  
          })
  
          console.log(data.overview,"===>ini data dari search lho");
          dispatch({
          type: "SEARCH_MOVIE",
          payload: data.data.results
  
          })
          
      } catch (error) {
          
      }
  
  
  }}



  

export const apiGetMoviesSDetailMovie = (paramData = "detail_movie") => {

    console.log(paramData,"aku ter API DETAIL");
    
  return async (dispatch)=> {
  
      try {
          const data = await axios({
              method: 'GET',
              // https://api.themoviedb.org/3/movie/popular?language=en-US&page=1
              url: `https://api.themoviedb.org/3/movie/${paramData}?language=en-US`,
              headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2RjNDJmZTM2YzUxZGM1N2IyYWVhMTRjZjEzMzJmMiIsIm5iZiI6MTczNjk5NTAyOS4wMjgsInN1YiI6IjY3ODg3MGQ1ODhjNTU4NTZkNTFkM2IzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vAgeTjVpnstOHP79SBvdkOPCqWcnhni1W8v8aBSw16c'
                }
  
          })
  
          console.log(data.data,"===>ini data dari DETAIL lho");
          dispatch({
          type: "DETAIL_MOVIE",
          payload: data.data
  
          })
          
      } catch (error) {
          
      }
  
  
  }}