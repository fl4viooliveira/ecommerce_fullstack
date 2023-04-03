import { BrowserRouter } from "react-router-dom";
import Router from "./pages/router";
import { pagesData } from "./pages/pagesData";

export default function App() {
  return (
    <BrowserRouter>
      <Router pagesData={pagesData} />
    </BrowserRouter>
  );
}


