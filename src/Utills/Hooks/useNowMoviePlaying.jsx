import { movieOptions } from '../Constants'
import { useEffect } from 'react'
import { addNowPlayingMovieData } from '../Movieslice'
import { useDispatch } from 'react-redux'
const useNowMoviePlaying = () => {
    const dispatch=useDispatch();
    useEffect(()=>{
        fetchData()
      },[])
      const fetchData=async()=>{
          const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', movieOptions);
          const json=await data.json()
          dispatch(addNowPlayingMovieData(json.results))
      }
}
export default useNowMoviePlaying