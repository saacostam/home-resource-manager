export interface IAuthRepository {
  login(args: IMutationLoginIn): Promise<IMutationLoginOut>;
}

export interface IMutationLoginIn {
  username: string;
  password: string;
}

export interface IMutationLoginOut {
  token: string;
}
