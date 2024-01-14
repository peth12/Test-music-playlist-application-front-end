import { createBrowserRouter ,RouterProvider } from "react-router-dom";

import Main from "./Pages/Main";

import Error from "./Pages/Error";
import Playlist from "./Pages/Playlist";
import CreatePlaylist from "./Pages/CreatePlaylist";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />
  },
  {
    path: "/playlist",
    element: <Playlist />,
    errorElement: <Error />,
  },
  {
    path: "/playlist/:id",
    element: <Playlist />,
    errorElement: <Error />,
  },
  {
    path: "/create",
    element: <CreatePlaylist />,
    errorElement: <Error />,
  }
])
export default function App() {
  return <RouterProvider router={router} />;
}
