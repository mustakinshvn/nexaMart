"use client";

import { createContext, useContext, useState } from "react";
import { useAuthContext } from "./AuthContext";

type HeaderMessageContextType = {
  headerMessageStatus: boolean;
  setHeaderMessageStatus: (isOpen: boolean) => void;
};

const HeaderMessageContext = createContext<
  HeaderMessageContextType | undefined
>(undefined);

export const HeaderMessageContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const autContext = useAuthContext();
  const [isOpen, setIsOpen] = useState(!autContext.user);

  const setHeaderMessageStatus = (isOpen: boolean) => {
    setIsOpen(isOpen);
  };

  return (
    <HeaderMessageContext.Provider
      value={{
        headerMessageStatus: isOpen,
        setHeaderMessageStatus,
      }}
    >
      {children}
    </HeaderMessageContext.Provider>
  );
};

export const useHeaderMessageContext = () => {
  const context = useContext(HeaderMessageContext);
  if (!context) {
    throw new Error(
      "useHeaderMessageContext must be used within a HeaderMessageContextProvider"
    );
  }
  return context;
};
