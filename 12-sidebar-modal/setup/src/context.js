import React, { useState } from "react";

const AppContext = React.createContext();

//got App component in children
const AppProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);

  const openSideBar = () => {
    setIsSideBarOpen(true);
  };
  const closeSideBar = () => {
    setIsSideBarOpen(false);
  };

  const openModel = () => {
    setIsModelOpen(true);
  };
  const closeModel = () => {
    setIsModelOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSideBarOpen,
        isModelOpen,
        openSideBar,
        closeSideBar,
        openModel,
        closeModel,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
