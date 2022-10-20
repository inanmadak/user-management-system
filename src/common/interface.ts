export interface ReducerAction {
  type: string;
  data?: any;
}

export interface UserInfo {
  id: string;
  name: string;
  birthdate: Date;
  group: string;
}
