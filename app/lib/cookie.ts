import { cookies } from "next/headers";

export const setAuthTokenCookie = async (token: string) => {
  (await cookies()).set("authToken", token, {
    httpOnly: true,
    maxAge: 60*60*24, 
  });
};

export const removeAuthTokenCookie = async () => {
  (await cookies()).delete("authToken");
};

export const getAuthTokenCookie = async () => {
  return (await cookies()).get("authToken")?.value ?? "";
};
