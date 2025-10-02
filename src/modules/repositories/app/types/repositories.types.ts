import type {
  IAuthRepository,
  ITimezoneRepository,
  IUserRepository,
} from "./repositories";

export interface IRepositories {
  auth: IAuthRepository;
  timezone: ITimezoneRepository;
  user: IUserRepository;
}
