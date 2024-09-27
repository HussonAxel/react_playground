import { createBrowserRouter } from "react-router-dom";

// Imports Pages Components
import HomePageList from "./HomePageList";
import RandomGridPicturesGallery from "./RandomGridPicturesGallery";
import TailwindStates from "./TailwindStates";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageList />,
  },
  {
    path: "/RandomGridPictureGallery",
    element: <RandomGridPicturesGallery />,
  },
  {
    path: "/TailwindStates",
    element: <TailwindStates />,
  },
]);

export default router;
