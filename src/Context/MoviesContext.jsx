
import { createContext } from "react";

export const moviesContext = createContext()
export default function MoviesProvider({ children }) {
    function getAllMovies() {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGMyNGYzMjAwNGJmMDIyY2EwMzZmOTJiMGU5OWY1ZCIsIm5iZiI6MTcxODAxNDcwMy4xMjYwMDAyLCJzdWIiOiI2NjY2ZDJlZmU0ZmM5NTA2ZWU5OWY1NzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.EkFqWjxTn09Fove5W3j0du_Xvg640kfuISMoOViU0Ms'
            }
        };
        return fetch('https://api.themoviedb.org/3/discover/movie', options)
            .then(res => res.json())
            .then(res => {
                return res
            }
            )
            .catch(err => {
                return err
            }
            );
    }
    //getmoviesDetails
    function getDetails(movieID) {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGMyNGYzMjAwNGJmMDIyY2EwMzZmOTJiMGU5OWY1ZCIsIm5iZiI6MTcxODAxNDcwMy4xMjYwMDAyLCJzdWIiOiI2NjY2ZDJlZmU0ZmM5NTA2ZWU5OWY1NzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.EkFqWjxTn09Fove5W3j0du_Xvg640kfuISMoOViU0Ms'
            }
        };

        return fetch(`https://api.themoviedb.org/3/movie/${movieID}`, options)
            .then(res => res.json())
            .then(res => res)
            .catch(err => err);
    }
    //addToWatch
    function addToWatch(movieID) {
        const options = {
            method: 'POST',
            body: JSON.stringify({
                media_type: "movie",
                media_id: movieID,
                watchlist: true,
            }),
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGMyNGYzMjAwNGJmMDIyY2EwMzZmOTJiMGU5OWY1ZCIsIm5iZiI6MTcxODAxNDcwMy4xMjYwMDAyLCJzdWIiOiI2NjY2ZDJlZmU0ZmM5NTA2ZWU5OWY1NzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.EkFqWjxTn09Fove5W3j0du_Xvg640kfuISMoOViU0Ms'
            }
        };

        return fetch('https://api.themoviedb.org/3/account/21320149/watchlist', options)
        .then(res => res.json())
            .then(res => res)
            .catch(err => err);
    }
    //getwatchlist
    function getWatchList(){
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGMyNGYzMjAwNGJmMDIyY2EwMzZmOTJiMGU5OWY1ZCIsIm5iZiI6MTcxODAxNDcwMy4xMjYwMDAyLCJzdWIiOiI2NjY2ZDJlZmU0ZmM5NTA2ZWU5OWY1NzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.EkFqWjxTn09Fove5W3j0du_Xvg640kfuISMoOViU0Ms'
            }
          };
          
         return fetch('https://api.themoviedb.org/3/account/21320149/watchlist/movies', options)
            .then(res => res.json())
            .then(res => res)
            .catch(err => err);
    }
     //removeToWatch
     function removeToWatch(movieID) {
        const options = {
            method: 'POST',
            body: JSON.stringify({
                media_type: "movie",
                media_id: movieID,
                watchlist: false,
            }),
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGMyNGYzMjAwNGJmMDIyY2EwMzZmOTJiMGU5OWY1ZCIsIm5iZiI6MTcxODAxNDcwMy4xMjYwMDAyLCJzdWIiOiI2NjY2ZDJlZmU0ZmM5NTA2ZWU5OWY1NzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.EkFqWjxTn09Fove5W3j0du_Xvg640kfuISMoOViU0Ms'
            }
        };

        return fetch('https://api.themoviedb.org/3/account/21320149/watchlist', options)
        .then(res => res.json())
            .then(res => res)
            .catch(err => err);
    }
   //getTrending
   function getTrending(){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGMyNGYzMjAwNGJmMDIyY2EwMzZmOTJiMGU5OWY1ZCIsIm5iZiI6MTcxODAxNDcwMy4xMjYwMDAyLCJzdWIiOiI2NjY2ZDJlZmU0ZmM5NTA2ZWU5OWY1NzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.EkFqWjxTn09Fove5W3j0du_Xvg640kfuISMoOViU0Ms'
        }
      };
      
       return  fetch('https://api.themoviedb.org/3/trending/all/day', options)
        .then(res => res.json())
        .then(res => res)
        .catch(err => err);
   }
    return <moviesContext.Provider value={{ getAllMovies, getDetails, addToWatch, getWatchList, removeToWatch, getTrending }}>
        {children}
    </moviesContext.Provider>
}