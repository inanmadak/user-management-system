export interface ReducerAction {
  type: string;
  data?: any;
}

export interface UserInfo {
  id: string;
  name: string;
  birthdate: Date;
  group: GroupInfo;
}

export interface GroupInfo {
  id: string;
  name: string;
  createdAt: Date;
}
