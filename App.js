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
                React.createElement("h1", {}, "1 H1 Tag"),
                React.createElement("h2", {}, "2 H2 Tag"),
                React.createElement("h3", {}, "3 H3 Tag")
            ]

        )
    ]
)

ReactDOM.createRoot(document.getElementById("root")).render(parent);