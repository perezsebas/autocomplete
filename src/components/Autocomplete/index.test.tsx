import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Autocomplete } from "./index";
import { countriesFixture } from "./fixture";

describe("Autocomplete", () => {
  let input: HTMLElement;
  const setup = () => {
    render(<Autocomplete suggestions={countriesFixture} />);
    input = screen.getByLabelText("country-input");
  };

  test("renders suggestions", async () => {
    setup();
    fireEvent.change(input, { target: { value: "Col" } });
    const suggestionHighlighted = await screen.findByText(/Col/i);
    expect(suggestionHighlighted).toBeInTheDocument();
    const restOfSuggestion = await screen.findByText(/ombia/i);
    expect(restOfSuggestion).toBeInTheDocument();
  });

  test("renders text No found", async () => {
    setup();
    fireEvent.change(input, { target: { value: "Can" } });
    const notFound = await screen.findByText(/Not found/i);
    expect(notFound).toBeInTheDocument();
  });
});
