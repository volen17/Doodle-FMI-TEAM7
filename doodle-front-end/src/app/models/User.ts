export interface User {
  email: string;
  password: string;
  confirmedPassword: string;
  name: string;
}

export interface LoginUser {
  email: string;
  password: string;
}
