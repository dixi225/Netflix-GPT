import { useEffect } from 'react'
import { movieOptions } from '../Constants'
import { useDispatch } from 'react-redux'
import { addMovieTrailer } from '../Movieslice'
const useMovieTrailer = ({id}) => {
    const dispatch=useDispatch()
        const getVideo=async()=>{
          const data=await fetch('https://api.themoviedb.org/3/movie/'+id+'/videos?language=en-US',movieOptions )
          const json=await data.json()
          const mainTrailer=json.results.filter((video)=> video.type==="Trailer")    
          dispatch(addMovieTrailer(mainTrailer[0]))    
        }
        useEffect(()=>{
            getVideo()
        },[])
}

export default useMovieTrailer