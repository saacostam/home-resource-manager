export interface IAuthRepository {
  login(args: IMutationLoginIn): Promise<IMutationLoginOut>;
  signup(args: IMutationSignUpIn): Promise<void>;
}

export interface IMutationLoginIn {
  username: string;
  password: string;
}

export interface IMutationLoginOut {
  token: string;
}

export interface IMutationSignUpIn {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  timezone: string;
}
