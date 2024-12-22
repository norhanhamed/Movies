import React, { useContext, useEffect, useState } from 'react'
import { moviesContext } from '../../Context/MoviesContext';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';

export default function Movies() {

  let { getAllMovies, addToWatch } = useContext(moviesContext);
  let [movies, setMovies] = useState([])
  async function getMoviesToList() {
    let res = await getAllMovies();
    if (res) {
      setMovies(res.results);
      console.log(res);
    }
  }
  async function addMovie(moviID) {
    let res = await addToWatch(moviID);
    console.log(res);
    if (res?.success == true) {
      toast.success("movie add to watchlist", {
        duration: 1500,
        position: "bottom-right"
      })
    } else {
      toast.error("error occur", {
        duration: 1500,
        position: "bottom-right"
      })
    }
  }
  useEffect(() => {
    getMoviesToList()
  }, []);

  return (
    <>
    <Helmet>
        <title> Movies Page</title>
        <meta name='description' content='welcom to movies page' />
      </Helmet>
      <div className="grid grid-cols-12 my-4 ">
        {movies?.map((movies) => {
          return (
            <div className=" col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 " key={movies.id}>
              <div className="px-4">
                <Link to={`/movieDetails/${movies.id}`}>
                  <div>
                    <img src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} alt="" />
                    <h2 className="text-lg font-bold h-[30px] line-clamp-1 pt-2">{movies.title}</h2>

                  </div>
                </Link>
                <button onClick={() => { addMovie(movies.id) }}
                  className='bg-slate-400 w-full my-6 text-white px-2 py-3 rounded-lg'>
                    Add To WatchList
                    </button>
              </div>
            </div>
          )
        })}
      </div>

    </>
  )
}
