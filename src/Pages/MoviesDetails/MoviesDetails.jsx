import React, { useContext, useEffect, useState } from 'react'
import { moviesContext } from '../../Context/MoviesContext'
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function MoviesDetails() {
  let { id } = useParams();
  const { getDetails, addToWatch } = useContext(moviesContext);
  const [movie, setmovies] = useState({})

  async function getmoviesDetails(movieID) {
    let res = await getDetails(movieID);
    console.log(res);
    setmovies(res)
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
    getmoviesDetails(id)
  }, [])
  return (
    <>
      {movie && (
        <div className="container mt-5">
          <div className="flex flex-wrap">
            <div className="w-1/4">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
            </div>
            <div className="w-2/4 ml-20">
              <h2 className="text-2xl">{movie.title}</h2>
              <p className="text-ld text-gray-400 my-6">{movie.overview}</p>
              <h3 className="text-xl font-bold mb-3">Production Compaines : </h3>
              <ul className="flex ">
                {movie?.production_companies?.map((prod) => {
                  return (
                    <li className='mr-4 my-3'>
                      <img src={`https://image.tmdb.org/t/p/w500${prod.logo_path}`} className='w-[70px]' alt="" />
                    </li>
                  )
                })}
              </ul>
              <h3 className="text-xl font-bold my-3">Spoken Languages : </h3>
              <ul className="flex ">
                {movie?.spoken_languages?.map((lang) => {
                  return (
                    <li className='mr-4 my-1'>
                      {lang.name}
                    </li>
                  )
                })}
              </ul>
              <button onClick={() => { addMovie(movie.id) }}
                className='bg-blue-500 text-white mt-7 px-2 py-2 w-full rounded'>
                Add to WatchList
              </button>
            </div>
          </div>
        </div>
      )
      }

    </>
  )
}
