import NavBar from "./fast_cars/components/NavBar"
import CarPage from "./fast_cars/web_pages/CarPage"
import HomePage from "./fast_cars/web_pages/HomePage"

import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom"

import EmptyCar from "./fast_cars/components/EmptyCar"

function App() {

  const router = createHashRouter(
    [
    
    {
      path: "/",
      element: <HomePage />,
    },

    {
      path: "/car",
      element: <HomePage />
    },

    {
      path: "/car/:carId",
      element: <CarPage />
    },

    {
      path: "*",
      element: <EmptyCar />
    },

  ],
  
)

  return (
    
    <>

    <NavBar />

    <main>

      <RouterProvider router={router} />

    </main>

    </>
  )
}

export default App
