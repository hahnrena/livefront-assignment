import React from "react";
import { render, screen, act } from "@testing-library/react";
import TestComponent from "../TestComponent"; // The test component that uses useSpotifyToken
import "@testing-library/jest-dom";

// Mock the fetch API to prevent real HTTP requests during tests
beforeEach(() => {
  // Clear all mocks to avoid test interference
  jest.clearAllMocks();

  // Mock global fetch to return mock data
  global.fetch = jest.fn();

  // Mock console.error to prevent error logs during tests
  jest.spyOn(console, "error").mockImplementation(() => {});
});

// Test for successful token fetch
test("fetches and returns access token", async () => {
  const mockAccessToken = "mockAccessToken";
  const mockClientId = "mockClientId";
  const mockClientSecret = "mockClientSecret";

  // Mock fetch to return a mock access token
  (fetch as jest.Mock).mockResolvedValueOnce({
    json: jest.fn().mockResolvedValueOnce({ access_token: mockAccessToken }),
  });

  // Render the component
  render(
    <TestComponent clientId={mockClientId} clientSecret={mockClientSecret} />
  );

  // Wait for the token to be fetched and rendered
  await act(async () => {});

  // Check if the access token is displayed
  expect(
    screen.getByText(`Access Token: ${mockAccessToken}`)
  ).toBeInTheDocument();

  // Verify that fetch was called correctly
  expect(fetch).toHaveBeenCalledWith(
    "https://accounts.spotify.com/api/token",
    expect.objectContaining({
      method: "POST",
      body: expect.any(URLSearchParams), // Check if body contains correct params
      headers: expect.objectContaining({
        "Content-Type": "application/x-www-form-urlencoded",
      }),
    })
  );
});

// Test for failed token fetch
test("returns null on failed fetch", async () => {
  const mockClientId = "mockClientId";
  const mockClientSecret = "mockClientSecret";

  // Mock fetch to throw an error
  (fetch as jest.Mock).mockRejectedValueOnce(new Error("Failed to fetch"));

  // Render the component
  render(
    <TestComponent clientId={mockClientId} clientSecret={mockClientSecret} />
  );

  // Wait for the token to be fetched and rendered
  await act(async () => {});

  // Check if the loading text appears or any fallback content is displayed
  expect(screen.getByText("Loading...")).toBeInTheDocument();

  // Verify that fetch was called
  expect(fetch).toHaveBeenCalled();
});
