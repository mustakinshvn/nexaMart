"use client";

import { createContext, useContext, useState } from "react";
import { UserType } from "../type/UserType";
import { getUserById, getDecodedJwt, logoutAction } from "./actions";

type AuthContextType = {
  token: string;
  user: UserType | null;
  userLogin: (token: string) => Promise<void>;
  userLogout: () => Promise<void>;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthContextProvider({
  children,
  initialToken,
  initialUser,
}: {
  children: React.ReactNode;
  initialToken: string | null;
  initialUser: UserType | null;
}) {
  const [token, setToken] = useState(initialToken ?? "");
  const [user, setUser] = useState<UserType | null>(initialUser);
  const [loading, setLoading] = useState(false);

  const userLogin = async (token: string) => {
    setLoading(true);
    setToken(token);
    const decoded = await getDecodedJwt(token);
    if (decoded?.sub) {
      const user = await getUserById(decoded.sub);
      setUser(user);
    }

    setLoading(false);
  };

  const userLogout = async () => {
    setToken("");
    await logoutAction();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ token, user, userLogin, userLogout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuthContext must be used inside provider");
  return ctx;
};
