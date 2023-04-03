import { routerType } from "../types/router.types";
import Home from "./Home";
import About from "./About";

export const pagesData: routerType[] = [
  {
    path: "",
    element: <Home />,
    title: "home",
  },
  {
    path: "about",
    element: <About />,
    title: "about",
  },
];

