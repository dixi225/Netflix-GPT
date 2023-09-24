import { movieOptions } from '../Constants'
import { useEffect } from 'react'
import { addTopRatedMovieData } from '../Movieslice'
import { useDispatch } from 'react-redux'
const useTopratedMoviePlaying = () => {
    const dispatch=useDispatch();
    useEffect(()=>{
        fetchData()
      },[])
      const fetchData=async()=>{
          const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', movieOptions);
          const json=await data.json()
          dispatch(addTopRatedMovieData(json.results))
      }
}
export default useTopratedMoviePlaying