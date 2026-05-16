"use server";

import { setAuthTokenCookie } from "../lib/cookie";
import {  signUpSchema, UserSignUpData } from "./schemas/userSchema"
import {  UserLogInData } from "./schemas/userSchema"
import { z } from "zod";

export async function signUp(data: UserSignUpData) {
  try {
    const parsed = signUpSchema.safeParse(data);
    if (!parsed.success) {
      const errors = z.flattenError(parsed.error);
      return {
        message: "Validation failed",
        errors: errors,
      };
    }

    const response = await serverResponse({method:"POST", path:"/users",data});
    
    if (response.status === 200 || response.status === 201) {
      return {
        message: "User created successfully",
        user: await response.json(),
      };
    }

    return { message: "Internal server error" };
  } catch {
    throw new Error("Failed to create user");
  }
}

export async function logIn(data: UserLogInData) {
  try {
    
    const response = await serverResponse({method:"POST", path:"/auth/login", data});
    const result = await response.json();

    if (response.ok) {
      await setAuthTokenCookie(result.token);
      return {
        message: "Login successful",
        token: result.token, 
      };
    }

    if (response.status === 401) {
      return { message: "Invalid username or password" };
    }

    if (response.status === 404) {
      return { message: "User not found" };
    }

    return { message: "Internal server error" };
  } catch {
    throw new Error("Failed to log in");
  }
}

type ServerResponseProps= {
  method: string;
  path: string;
  data: UserLogInData | UserSignUpData;
}

 const serverResponse = async ({method, path, data}: ServerResponseProps) => {
  const response = await fetch(`${process.env.BASE_URL}${path}`, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  return  response;
 }