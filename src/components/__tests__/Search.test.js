import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should render body component with search button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const search = screen.getByRole("button", { name: "Search" });
  // console.log(search);
  expect(search).toBeInTheDocument();
});
it("should search reslist for burger text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  //getting search button
  const search = screen.getByRole("button", { name: "Search" });
  //getting search input
  const searchInput = screen.getByTestId("searchInput");
  // console.log(search);

  //trigger change event for search input
  fireEvent.change(searchInput, { target: { value: "burger" } });
  //trigger click event for search button
  fireEvent.click(search);
  
  //getting all the elements with testid "resCard"
  const resCards = screen.getAllByTestId("resCard");

  // expect(searchInput).toBeInTheDocument();
  
  // screen should load 2 cards
  expect(resCards.length).toBe(2);
});
