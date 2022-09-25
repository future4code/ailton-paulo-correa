import {
  ResponseSignup,
  User,
  UserInfos,
  UserLogin,
  USER_ROLES,
} from "../models/User";
import { UserDatabase } from "../database/UserDatabase";
import { MissingFields } from "../error/MissingFields";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness {
  constructor(
    private userDatabase: UserDatabase,
    private authenticator: Authenticator,
    private hashManager: HashManager,
    private idGenerator: IdGenerator
  ) {}

  public signup = async (userInfos: UserInfos): Promise<ResponseSignup> => {
    const { name, email, password }: UserInfos = userInfos;

    if (!name || !email || !password) throw new MissingFields();

    if (password.length < 3)
      throw new Error(`A senha deve conter no minimo 3 caracteres!`);

    const verifyEmail = await this.userDatabase.verifyEmail(email);

    if (verifyEmail) throw new Error(`E-mail já cadastrado!`);

    const id = this.idGenerator.generate();
    const hashPassword = await this.hashManager.hash(password);
    const role = USER_ROLES.NORMAL;
    const user = new User(id, name, email, hashPassword, role);

    await this.userDatabase.signup(user);

    const token = this.authenticator.generateToken({ id, role });

    return { token, role };
  };

  public login = async (user: UserLogin): Promise<string> => {
    const { email, password }: UserLogin = user;

    if (!email || !password) throw new MissingFields();

    if (password.length < 3)
      throw new Error(`A senha deve conter no minimo 3 caracteres!`);

    const userByEmail = await this.userDatabase.verifyEmail(email);

    if (!userByEmail) throw new Error(`E-mail não cadastrado!`);

    const verifyPassword = await this.hashManager.compare(
      password,
      userByEmail.getPassword()
    );

    if (!verifyPassword) throw new Error(`Senha está incorreta!`);

    const token = this.authenticator.generateToken({
      id: userByEmail.getId(),
      role: userByEmail.getRole(),
    });

    return token;
  };
}
