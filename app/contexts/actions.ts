"use server";

import { jwtDecode } from "jwt-decode";

import { UserType } from "../type/UserType";
import { setAuthTokenCookie } from "../lib/cookie";
import { removeAuthTokenCookie } from "../lib/cookie";

export const getUserById =  async (id: number) => {
    const baseUrl = process.env.BASE_URL;

    if (!baseUrl) {
      return null;
    }

    try {
      const response = await fetch(`${baseUrl}/users/${id}`);

      if (!response.ok) {
        return null;
      }

      return (await response.json()) as UserType;
    } catch {
      return null;
    }
}

type JwtPayload = {
  sub: number;
  user: string;
  iat: number;
};

export const getDecodedJwt =  async (token: string) : Promise<JwtPayload | null> => {
    try {
      const decoded = jwtDecode<JwtPayload>(token);
      return decoded ?? null;
    } catch {
      return null;
    }
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






