export enum USER_ROLES {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN",
}

export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private role: USER_ROLES
  ) {}

  public getId = (): string => this.id;

  public getName = (): string => this.name;

  public getEmail = (): string => this.email;

  public getPassword = (): string => this.password;

  public getRole = (): USER_ROLES => this.role;

  public setId = (newId: string): void => {
    this.id = newId;
  };

  public setName = (newName: string): void => {
    this.name = newName;
  };

  public setEmail = (newEmail: string): void => {
    this.email = newEmail;
  };

  public setPassword = (newPassword: string): void => {
    this.password = newPassword;
  };

  public setRole = (newRole: USER_ROLES): void => {
    this.role = newRole;
  };
}

export interface IUserDataBase {
  id: string;
  name: string;
  email: string;
  password: string;
  role: USER_ROLES;
}

export interface IUserSignup {
  name: string;
  email: string;
  password: string;
}

export interface IUserCreated {
  token: string;
  role: USER_ROLES;
}
