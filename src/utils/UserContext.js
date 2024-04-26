import { createContext } from "react";

const UserContext = createContext({
    loggedInUser : "def_user"
}) 

export default UserContext;