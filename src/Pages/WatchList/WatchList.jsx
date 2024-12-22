import React, { useContext, useEffect, useState } from 'react'
import { moviesContext } from '../../Context/MoviesContext';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';

export default function WatchList() {
  const [moviesWatch, setMoviesWatch] = useState([]);
  const { getWatchList, removeToWatch } = useContext(moviesContext);


  async function getAllWatchedList() {
    let res = await getWatchList();
    console.log(res);
    console.log(res.results);
    setMoviesWatch(res.results)

  }
  async function removeWatchedList(id) {
    let res = await removeToWatch(id);
    console.log(res);
    let filteredMovies = [...moviesWatch]
     filteredMovies = filteredMovies.filter((movie)=>movie.id !==id)
    setMoviesWatch(filteredMovies);

    if(res?.success == true){
      toast.success("movie removed from watchlist",{
        duration:1500,
        position:"bottom-right"
      })
    }else{
      toast.error("error occured",{
        duration:1500,
        position:"bottom-right"
      })
    }
    }

  useEffect(() => {
    getAllWatchedList()
  }, [])
  return (
    <>
    <Helmet>
        <title>WatchList Movies Page</title>
        <meta name='description' content='welcom to WatchList movies page' />
      </Helmet>

    {moviesWatch.length == 0 ?(
      <div className='py-16 flex flex-col justify-center items-center mt-40'>
        <h3 className='font-bold text-3xl'>Your Watclist is Empty!!...</h3>
        <Link to="/movies">
        <button className='bg-blue-500 rounded p-2 px-4  mt-5 text-white'>Add Your Watch List From here...</button>
      </Link>
      </div>
    ):(
      <div className="flex flex-wrap my-4">
        {moviesWatch?.map((movies) => {
          return (
            <div className="w-1/6">
              <div className="px-4">
                <Link to={`/movieDetails/${movies.id}`}>
                  <div>
                    <img src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} alt="" />
                    <h2 className="text-lg font-bold h-[70px]">{movies.title}</h2>

                  </div>
                </Link>
                <button onClick={() => { removeWatchedList(movies.id) }}
                  className='bg-red-400 w-full my-6 text-white px-2 py-3 rounded-lg'>
                   Delete 
                    </button>
              </div>
            </div>
          )
        })}
      </div>
      )}
    </>
  )
}
