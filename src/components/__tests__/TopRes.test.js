import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/mockResListData.json"
global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(MOCK_DATA);
      },
    });
  });

it("should filter res list on click of top Reataurants button", async() => {
  await act(async()=>{
    render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
  })

  const allResCards = screen.getAllByTestId("resCard");
//   console.log(allResCards.length)
  expect(allResCards.length).toBe(20)

  const topResBtn = screen.getByRole("button",{name:"Top Restaurants"})
  fireEvent.click(topResBtn);
  
  const topResCards = screen.getAllByTestId("resCard");
//   console.log(topResCards)
  expect(topResCards.length).toBe(15)

});
