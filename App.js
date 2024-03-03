import React from "react";
import ReactDOM from "react-dom/client";

//JSX
//JSX ==(babel)==> React.createElement ==(react)==> ReactElement - JS object => HTML Element (render)
// const jsxHeading = <h1 id="heading">
//     asjbsakasnj
//     </h1>;

//Functional Component
const Title = () => {
  return <h1 id="heading">Title</h1>;
};

const subHeading = <h2 id="heading">Sub Heading</h2>;

//Functional Component
const JsxHeading = () => {
  return (
    <div id="container">
      <Title /> 
      {subHeading}
      <h3 id="heading">asjbsakasnj</h3>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<JsxHeading />);
