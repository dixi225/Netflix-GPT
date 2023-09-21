import { movieOptions } from '../Constants'
import { useEffect } from 'react'
import { addMovieData } from '../Movieslice'
import { useDispatch } from 'react-redux'
const useMoviePlaying = () => {
    const dispatch=useDispatch();
    useEffect(()=>{
        fetchData()
      },[])
      const fetchData=async()=>{
          const data=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', movieOptions);
          const json=await data.json()
          console.log(json.results);
          dispatch(addMovieData(json.results))
      }
}
export default useMoviePlaying