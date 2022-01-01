import React, { createContext } from "react"
import Login from "../Pages/LoginPage"

export const LoginContext = createContext({
    username : 'none not yet',
    setUsername : (username) => {}
})
