import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders title element", () => {
  render(<App />);
  const titleElement = screen.getByText(/Autocomplete/i);
  expect(titleElement).toBeInTheDocument();
});
