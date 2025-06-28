import { useContext } from "react";
import { authContext } from "./auth-context";

export function useAuth() {
  return useContext(authContext);
}
