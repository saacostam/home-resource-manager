export enum QueryKey {
  GET_API_HEALTH = "Get Api Health",

  GET_ALL_CATEGORIES = "Get All Categories",
  GET_CATEGORY_BY_ID = "Get Category By Id",

  GET_ALL_RESOURCES = "Get All Resources",
  GET_RESOURCE_BY_ID = "Get Resource By Id",

  GET_ALL_TASKS = "Get All Tasks",
  GET_TASK_BY_ID = "Get Task By Id",

  GET_ALL_TASK_INSTANCES = "Get All Task Instances",
}

export enum MutationKey {
  DELETE_DELETE_CATEGORY = "Delete Delete Category",
  POST_CREATE_CATEGORY = "Post Create Category",
  PUT_UPDATE_CATEGORY = "Put Update Category",

  DELETE_DELETE_RESOURCE = "Delete Delete Resource",
  POST_CREATE_RESOURCE = "Post Create Resource",
  PUT_UPDATE_RESOURCE = "Put Update Resource",

  DELETE_DELETE_TASK = "Delete Delete Task",
  POST_CREATE_TASK = "Post Create Task",
  PUT_UPDATE_TASK = "Put Update Task",

  DELETE_DELETE_TASK_COMPLETION = "Delete Delete Task Completion",
  POST_CREATE_TASK_COMPLETION = "Post Create Task Completion",

  POST_LOGIN = "Post Login",
  POST_SIGNUP = "Post Signup",
}
