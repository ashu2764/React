import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children})=>{ 
     const [user, setUser] = React.useState(null)
    return (
        <UserContextProvider.Provider value={{user, setUser}}>
        {children}
        </UserContextProvider.Provider>
    )

}

export default UserContextProvider