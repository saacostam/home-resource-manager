export interface IAuthRepository {
  login(args: IMutationLoginIn): Promise<IMutationLoginOut>;
  signup(args: IMutationSignUp): Promise<void>;
}

export interface IMutationLoginIn {
  username: string;
  password: string;
}

export interface IMutationLoginOut {
  token: string;
}

export interface IMutationSignUp {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}
