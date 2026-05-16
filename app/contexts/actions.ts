"use server";

import { jwtDecode } from "jwt-decode";

import { UserType } from "../type/UserType";
import { setAuthTokenCookie } from "../lib/cookie";
import { removeAuthTokenCookie } from "../lib/cookie";

export const getUserById =  async (id: number) => {
    const user:Promise<UserType>  = fetch(`${process.env.BASE_URL}/users/${id}`)
        .then(res => res.json())
        .then(data => data);
    return user;
}

type JwtPayload = {
  sub: number;
  user: string;
  iat: number;
};

export const getDecodedJwt =  async (token: string) : Promise<JwtPayload | null> => {
    const decoded =  jwtDecode<JwtPayload>(token);
    return decoded ?? null;
}

export const initializeUser = async (token: string) : Promise<UserType | null> => {
    const decodedToken = await getDecodedJwt(token);
    if (decodedToken) {
      const userId = decodedToken.sub;
      const user = await getUserById(userId);
      return user;
    }
    return null;
}

export const loginAction = async (token: string) => {
  await setAuthTokenCookie(token);
}

export const logoutAction = async () => {
  await removeAuthTokenCookie();
}






