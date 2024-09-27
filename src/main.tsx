import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePageList from './routes/HomePageList';
import RandomGridPicturesGallery from "./routes/RandomGridPicturesGallery";

import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageList />,
  },
  {
    path: "/RandomGridPictureGallery",
    element: <RandomGridPicturesGallery />,
    
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />{" "}
  </StrictMode>
);
