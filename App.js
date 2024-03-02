import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Starting React !");

const parent = React.createElement(
    "div",
    { id: "Parent" },
    [
        React.createElement(
            "div",
            { id: "Child1" },
            [
                React.createElement("h1", {}, "1 H1 Tag"),
                React.createElement("h2", {}, "2 H2 Tag"),
                React.createElement("h3", {}, "3 H3 Tag")
            ]
        ),
        React.createElement(
            "div",
            { id: "Child2" },
            [
                React.createElement("h4", {}, "4 H4 Tag"),
                React.createElement("h5", {}, "5 H5  Tag"),
                React.createElement("h6", {}, "6 H6  Tag")
            ]
        )
    ]
)

ReactDOM.createRoot(document.getElementById("root")).render(parent);