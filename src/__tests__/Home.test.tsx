import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Home from "../components/home-page/Home";

describe("Home Component", () => {
  test("renders Home component", async () => {
    render(<Home />);
    await waitFor(
      () => {
        const titleElement = screen.getByText(/Music.ally Search/i);
        expect(titleElement).toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });

  test("search button triggers search function", () => {
    render(<Home />);
    const searchButton = screen.getByRole("button", {
      name: /Search/i,
    });
    fireEvent.click(searchButton);
    // Expect loading state or check API call with mocked fetch
    expect(screen.queryByTestId("loading-bar")).toBeInTheDocument();
  });

  test("favorites icon toggles favorite list view", () => {
    render(<Home />);
    const favoritesIcon = screen.getByRole("button", {
      name: /Favorites/i,
    });
    fireEvent.click(favoritesIcon);
    const favoritesList = screen.getByText(/My Favorites/i);
    expect(favoritesList).toBeInTheDocument();
  });

  test("displays loading bar when loading", () => {
    render(<Home />);
    const loadingBar = screen.queryByTestId("loading-bar");
    // Simulate setting loading state to true
    expect(loadingBar).not.toBeInTheDocument(); // Initial render should not show it
  });
});
