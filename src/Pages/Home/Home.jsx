import React, { useContext, useEffect, useState } from 'react'
import { moviesContext } from '../../Context/MoviesContext'
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';


export default function Home() {
  const [trending, setTrending] = useState([])
  const { getTrending, addToWatch } = useContext(moviesContext);
  async function getMoviesTrending() {
    let res = await getTrending();
    if (res) {
      setTrending(res.results);
      console.log(trending)
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
    getMoviesTrending()
  }, [])
  return (
    <>
      <Helmet>
        <title>Trending Home</title>
        <meta name='description' content='welcom to home movies page' />
      </Helmet>
      <h2 className="text-3xl my-4">Trending</h2>
      <div className="grid grid-cols-12 my-4 gap-3">
        {trending?.map((trend) => {
          return (
            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 ">
              <div>
                <Link to={`/movieDetails/${trend.id}`}>
                  <div>
                    <img src={`https://image.tmdb.org/t/p/w500${trend.poster_path}`} alt="" />
                    <h2 className="text-lg font-bold  pt-2 h-[40px] line-clamp-1">{trend.title}</h2>

                  </div>
                </Link>
                <button onClick={() => { addMovie(trend.id) }}
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
