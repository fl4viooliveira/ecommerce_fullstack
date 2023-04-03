import { Route, Routes } from "react-router-dom";
import { routerType } from "../types/router.types";

interface Props {
  pagesData: routerType[];
}

const Router = ({ pagesData }: Props) => {
  const pageRoutes = pagesData.map(({ path, title, element }: routerType) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });

  return <Routes>{pageRoutes}</Routes>;
};

export default Router;
