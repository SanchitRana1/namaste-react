import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import mock_data from "../mocks/mockMenuData.json";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mock_data),
  })
);

it("Should load Restaurant menu component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart/>
        </Provider>
      </BrowserRouter>
    );
  });

  //get title name
  const resTitle = screen.getByText("McDonald's");
  //check if menu page is rendered
  expect(resTitle).toBeInTheDocument();

  //Get accordian header by title
  const accHeader = screen.getByText("Sides (13)");
  //trigger click event for accordian header
  fireEvent.click(accHeader);

  //get item card opened
  const itemCards = screen.getAllByTestId("item-card");
  //check if the number of dishes is same as the accordian header
  expect(itemCards.length).toBe(13);

  //get Add+ button
  const addBtns = screen.getAllByRole("button", { name: "Add+" });

  //get current item count in cart
  const oldCart = screen.getByText("(0)");
  //check if the number of dishes added to the cart is 0
  expect(oldCart).toBeInTheDocument();
  //trigger click event for add button
  fireEvent.click(addBtns[0]);

  //get updated item count in cart
  const updatedCart = screen.getByText("(1)");
  //check if the number of dishes added to the cart is 1
  expect(updatedCart).toBeInTheDocument();

  //trigger click event for add button
  fireEvent.click(addBtns[0]);
  //get updated item count in cart
  const updatedCart_1 = screen.getByText("(2)");
  //check if the number of dishes added to the cart is 2
  expect(updatedCart_1).toBeInTheDocument();

  //trigger click event for add button
  fireEvent.click(addBtns[0]);
  //get updated item count in cart
  const updatedCart_2 = screen.getByText("(3)");
  //check if the number of dishes added to the cart is 3
  expect(updatedCart_2).toBeInTheDocument();
});

it("should render 2 items in the cart page",async()=>{
    await act(async () => {
        render(
          <BrowserRouter>
            <Provider store={appStore}>
              <Header />
              <Cart/>
            </Provider>
          </BrowserRouter>
        );
      });
      const cartBtn = screen.getByText("🛒");
      expect(cartBtn).toBeInTheDocument();
      fireEvent.click(cartBtn);
      const dishCount = screen.getAllByTestId("item-card")
      expect(dishCount.length).toBe(3)
})
