import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));
const AboutUs = lazy(() => import("./components/About"));
const Test = lazy(() => import("./components/Test"));

const AppComponent = () => {
  return (
    <div className="app">
      <Header />
      {/**/}
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading About Us ....</h1>}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },

      {
        path: "/test",
        element: (
          <Suspense fallback={<h1>Loading Test ....</h1>}>
            <Test />
          </Suspense>
        ),
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading Grocery ....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
