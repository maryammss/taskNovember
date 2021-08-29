export class User {
    success: boolean | undefined;
    token: string | undefined;
    user!: UserInfo;
    profiles!: UserDetail[];
  }
  
  export class UserInfo {
    username: string | undefined;
  }
  
  export class UserDetail {
    id: string | undefined;
    name: string | undefined;
  }
  