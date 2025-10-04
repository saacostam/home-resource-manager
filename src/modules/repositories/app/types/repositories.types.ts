import type {
  IAuthRepository,
  ITaskInstancesRepository,
  ITimezoneRepository,
  IUserRepository,
} from "./repositories";

export interface IRepositories {
  auth: IAuthRepository;
  taskInstances: ITaskInstancesRepository;
  timezone: ITimezoneRepository;
  user: IUserRepository;
}
