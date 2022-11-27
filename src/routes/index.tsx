import DetailFilm from "../pages/DetailFilm/DetailFilm";
import Home from "../pages/Home/Home";

const publicRouters = [
  { path: "/", component: Home },
  { path: "film", component: DetailFilm },
];

export { publicRouters };
