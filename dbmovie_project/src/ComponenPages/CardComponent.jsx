import {useNavigate} from "react-router-dom"
import{useDispatch} from "react-redux"
import {apiGetMoviesSDetailMovie} from "../store/action"



export default function CardComponent({id, popularity, original_title, poster_path, overview}){
const navigate = useNavigate()
    // const dataMovies = useSelector(state => state.dataMovies)   
    const dispatch = useDispatch()
   
    // console.log(dataMovies,"<==data dari reducer");
    
  const handleButtonClick = () => {
   
    navigate(`/detail/${id}`)
    dispatch(apiGetMoviesSDetailMovie(id));
    console.log("Button clicked for movie ID:", id);
    console.log("AkU TERklik");
    
  };



    
        return (       
        <>
      
      <div className="card m-2" style={{width: "18rem"}}>
      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{original_title}</h5>
        <p className="card-text">{popularity}</p>
        <p className="id">{id}</p>
        {/* <p className="card-text">{overview}</p> */}
        <p className="card-text">
          {overview.length > 100 ? overview.slice(0, 100) + "..." : overview}
        </p>
        <button onClick={handleButtonClick} className="btn btn-primary">
          Go to Movie
        </button>
        
       
      
      </div>
    </div>


        
        </>     
    
        )
    
    
    }