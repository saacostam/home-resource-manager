import type {
  IAuthRepository,
  IBoardRepository,
  ITaskInstancesRepository,
  ITimezoneRepository,
  IUserRepository,
} from "./repositories";

export interface IRepositories {
  auth: IAuthRepository;
  board: IBoardRepository;
  taskInstances: ITaskInstancesRepository;
  timezone: ITimezoneRepository;
  user: IUserRepository;
}
