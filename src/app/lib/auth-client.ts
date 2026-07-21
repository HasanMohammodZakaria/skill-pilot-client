import { createAuthClient } from "better-auth/react";

function getBaseURL() {
  if (typeof window !== "undefined") {
  
    return "/api/auth";
  }

  return `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/api/auth`;
}

export const authClient = createAuthClient({
  baseURL: getBaseURL(),
});

export const { signIn, signUp, signOut, useSession } = authClient;