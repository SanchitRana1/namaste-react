import React from "react";
import ReactDOM from "react-dom/client";
import { FaReact, FaUserCircle } from "react-icons/fa";
import Header from "./components/Header";
import Body from "./components/Body";

const AppComponent = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<AppComponent />);
