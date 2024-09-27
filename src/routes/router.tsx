import { createBrowserRouter } from "react-router-dom";

// Imports Pages Components
import HomePageList from "./HomePageList";
import RandomGridPicturesGallery from "./RandomGridPicturesGallery";
import TailwindStates from "./TailwindStates";
import UnknownHTMLTags from "./UnknownHTMLTags";

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
  {
    path: "/UnknownHTMLTags",
    element: <UnknownHTMLTags />,
  }
]);

export default router;
