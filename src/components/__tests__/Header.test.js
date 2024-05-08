import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";


it("Should render header component with a Home link", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const header = screen.getByText("Home");
  expect(header).toBeInTheDocument();
});

it("Should render header component with cart items as 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartItems = screen.getByText("(0)");
  // console.log(cartItems)
  expect(cartItems).toBeInTheDocument();
});

it("Should render header component with click event Login  button ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button",{name: "Login"});
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button",{name: "Logout"});

  expect(logoutButton).toBeInTheDocument();
});


