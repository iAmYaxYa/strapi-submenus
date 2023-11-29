import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(false);
  const [pageId, setPageId] = useState(null);

  const openCloseSidebar = () => {
    setIsSidebar(!isSidebar);
  };
  return (
    <AppContext.Provider
      value={{ isSidebar, openCloseSidebar, pageId, setPageId }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useAppContext = () => useContext(AppContext);
