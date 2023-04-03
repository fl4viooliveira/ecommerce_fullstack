import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { routerType } from "../types/router.types";
import Router from "./router";

const pagesData: routerType[] = [
  {
    path: "home",
    title: "Home",
    element: <div>Home component</div>,
  },
  {
    path: "about",
    title: "About",
    element: <div>About component</div>,
  },
];

describe("Router", () => {
  it("should render the Home component on the /home route", () => {
    render(
      <MemoryRouter initialEntries={["/home"]}>
        <Router pagesData={pagesData} />
      </MemoryRouter>
    );

    const homeElement = screen.getByText("Home component");
    expect(homeElement).toBeInTheDocument();
  });

  it("should render the About component on the /about route", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <Router pagesData={pagesData} />
      </MemoryRouter>
    );

    const aboutElement = screen.getByText("About component");
    expect(aboutElement).toBeInTheDocument();
  });
});
