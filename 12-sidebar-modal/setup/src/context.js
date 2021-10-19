import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

//got App component in children
const AppProvider = ({children}) => {
    return <AppContext.Provider value='hello'>{children}</AppContext.Provider>
}

export {AppContext, AppProvider}