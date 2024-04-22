import React from "react";
import UserAbout from "./UserAbout";

// export default function About() {
//   return (
//     <div>
//       <h1>About</h1>
//       <UserAbout name={"Rana"} location={"Harshil"}/>
//       </div>
//   )
// }

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("P constructor");
  }
  componentDidMount() {
    // console.log("P componentDidMount");
  }

  render() {
    // console.log("P Render");

    return (
      <div>
        {/* <h1>About</h1> */}
        <UserAbout name={"Rana"} location={"Harshil"} />
      </div>
    );
  }
}

export default About;
