import React, { useEffect, useState } from "react";
export default UserAbout=()=>{
    const [name, setName] = useState("Dummy")
    const [location, setLocation] = useState("Default")
    const [avatar_url, setAvatar_url] = useState("Avatar_url")

    const fetchUserInfo= async()=>{
      const data = await fetch("https://api.github.com/users/sanchitrana1");
      const jsonD = await data.json();
      setName(jsonD.name) ;
      setLocation(jsonD.location);
      setAvatar_url( jsonD.avatar_url);
    } 

    useEffect(() => {
     fetchUserInfo();
    }, [])

    return (
      <div className="w-[20rem]">
      <img className="user-img" src={avatar_url} alt="avarat_urlavarat_urlavarat_urlavarat_urlavarat_urlavarat_url" />
      <div className=" w-100 flex-row text-center">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
      </div>
    </div>
    )
}

// class UserAbout extends React.Component {
  // constructor(props) {
    
  //   console.log("Constructor");
  //   super(props);
  //   this.state = {
  //     userInfo: {
  //       name: "Dummy",
  //       location: "Default",
  //       avatar_url: "avatar_url",
  //     },
  //   };
  // }
  // async componentDidMount() {
    
  //   console.log("Did Mount");
  //   const data = await fetch("https://api.github.com/users/sanchitrana1");
  //   const jsonD = await data.json();
  //   this.setState({
  //     userInfo: {
  //       name: jsonD.name,
  //       location: jsonD.location,
  //       avatar_url: jsonD.avatar_url,
  //     },
  //   });
    
  //   console.log("Data updated after API call");
  // }

//   componentDidUpdate(){
//     console.log("Did Update");
//   }

//   componentWillUnmount(){
//     console.log("will unount");  
//   }

//   render() {
//     console.log("C Render");

//     const { name, location, avatar_url } = this.state.userInfo;
//     return (
//       <div className="w-[20rem]">
//         <img className="user-img" src={avatar_url} alt="avarat_urlavarat_urlavarat_urlavarat_urlavarat_urlavarat_url" />
//         <div className=" w-100 flex-row text-center">
//           <h2>Name: {name}</h2>
//           <h3>Location: {location}</h3>
//         </div>
//       </div>
//     );
//   }
// }
// export default UserAbout;
