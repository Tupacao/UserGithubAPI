import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: "Nothing",
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: "Nothing",
    errorElement: <ErrorPage />
  },
  {
    path: "/comparar",
    element: "Nothing",
    errorElement: <ErrorPage />
  },
  {
    path: "/dados",
    element: "Nothing",
    errorElement: <ErrorPage />
  }
])


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App