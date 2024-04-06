import React, { useState } from "react";
// export default UserAbout=({name,location})=>{
//     const [count, setCount] = useState(0)

//     const onClick=()=>{
//         setCount((preval)=>{return preval+1});
//     }

//     return (
//         <div className="user-card">
//         <h1>count: {count}</h1>
//         <h2>Name: {name}</h2>
//         <h3>Location: {location}</h3>
//         <button onClick={onClick}>Counter</button>
//       </div>
//     )
// }

class UserAbout extends React.Component {
  constructor(props) {
    
    console.log("Constructor");
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "avatar_url",
      },
    };
  }
  async componentDidMount() {
    
    console.log("Did Mount");
    const data = await fetch("https://api.github.com/users/sanchitrana1");
    const jsonD = await data.json();
    this.setState({
      userInfo: {
        name: jsonD.name,
        location: jsonD.location,
        avatar_url: jsonD.avatar_url,
      },
    });
    
    console.log("Data updated after API call");
  }

  componentDidUpdate(){
    console.log("Did Update");
  }

  componentWillUnmount(){
    console.log("will unount");  
  }

  render() {
    console.log("C Render");

    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img className="user-img" src={avatar_url} alt="avarat_url" />
        <div className="user-card-info">
          <h2>Name: {name}</h2>
          <h3>Location: {location}</h3>
        </div>
        {/* <button onClick={()=>{
            this.setState({
                count: this.state.count+1
            })
        }}>Counter</button> */}
      </div>
    );
  }
}
export default UserAbout;
