import { createStore , applyMiddleware} from "redux"
import {thunk} from "redux-thunk"

const initialState =  {

    dataMovies: [],
    detailMovies:[],
    
    
    dataCoba: "Aku terpanggil"
}



const reducer = (state = initialState, action) => {
    console.log(action,"cek data dari action");
    
  switch (action.type) {
      case "CHANGE_DATA_MOVIES":
          return { ...state, dataMovies: action.payload };
      case "SEARCH_MOVIE": 
          return { ...state, dataMovies: action.payload };
          case "DETAIL_MOVIE": 
          return { ...state, detailMovies: action.payload };
      default:
          return state;
  }
};

// console.log(initialState,"data yg terkumpul ==>");




const store = createStore(reducer, applyMiddleware(thunk))

export default store