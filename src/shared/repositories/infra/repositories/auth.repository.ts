import type { useAuth } from "@/modules/auth";
import {
  type IAuthRepository,
  type IMutationLoginIn,
  type IMutationLoginOut,
  type IMutationSignUpIn,
} from "../../app";

export class AuthRepository implements IAuthRepository {
  constructor(private auth: ReturnType<typeof useAuth>["fetch"]) {}

  async login(args: IMutationLoginIn): Promise<IMutationLoginOut> {
    return this.auth<{
      token: string;
    }>({
      endpoint: "/auth/login",
      method: "POST",
      body: args,
    });
  }

  async signup(args: IMutationSignUpIn): Promise<void> {
    return this.auth({
      endpoint: "/auth/signup",
      method: "POST",
      body: args,
    });
  }
}
