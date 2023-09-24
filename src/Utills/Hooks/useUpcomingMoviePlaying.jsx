import { movieOptions } from '../Constants'
import { useEffect } from 'react'
import { addUpcomingMovieData } from '../Movieslice'
import { useDispatch } from 'react-redux'
const useUpcomingMoviePlaying = () => {
    const dispatch=useDispatch();
    useEffect(()=>{
        fetchData()
      },[])
      const fetchData=async()=>{
          const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', movieOptions);
          const json=await data.json()
          dispatch(addUpcomingMovieData(json.results))
      }
}
export default useUpcomingMoviePlaying