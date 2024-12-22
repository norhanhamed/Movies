import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Login from './Pages/Login/Login'
import Reg from './Pages/Reg/Reg'
import Home from './Pages/Home/Home'
import Movies from './Pages/Movies/Movies';
import WatchList from './Pages/WatchList/WatchList';
import UserProvider from './Context/UserContext'
import NotFound from './Components/NotFound/NotFound'
import MoviesProvider from './Context/MoviesContext'
import MoviesDetails from './Pages/MoviesDetails/MoviesDetails'
import { Toaster } from 'react-hot-toast'
import ProtectedRoute from './Components/ProtectedRoutes/ProtectedRoutes'

function App() {
  const routing = createBrowserRouter([
    {
      path: "/", element: <ProtectedRoute> <Layout /> </ProtectedRoute> , children: [
        { index: true, element: <Home /> },
       { path: "watchList", element: <WatchList /> },
        { path: "movies", element: <Movies /> },
        { path: "movieDetails/:id", element: <MoviesDetails /> },

        { path: "*", element: <NotFound /> },
      ],
    },
    {
      path:"/auth", element:<Layout/>, children:[
        { path: "reg", element: <Reg /> },
        { path: "login", element: <Login /> },
        
      ]
    }

  ])
  return (
    <>
      <UserProvider>
        <MoviesProvider>
          <RouterProvider router={routing} ></RouterProvider>
          <Toaster></Toaster>
        </MoviesProvider>
      </UserProvider>
    </>
  )
}
export default App
