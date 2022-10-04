import { UserDatabase } from "../database/UserDatabase";
import { MissingFields } from "../error/MissingFields";
import {
  ResponseSignup,
  User,
  UserInfos,
  UserLogin,
  USER_ROLES,
} from "../models/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness {
  public signup = async (userInfos: UserInfos): Promise<ResponseSignup> => {
    const { name, email, password }: UserInfos = userInfos;

    if (!name || !email || !password) throw new MissingFields();

    if (password.length < 3)
      throw new Error(`A senha deve conter no minimo 3 caracteres!`);

    const userDatabase = new UserDatabase();
    const verifyEmail = await userDatabase.verifyEmail(email);

    if (verifyEmail) throw new Error(`E-mail já cadastrado!`);

    const id = new IdGenerator().generate();
    const hashPassword = await new HashManager().hash(password);
    const role = USER_ROLES.NORMAL;
    const user = new User(id, name, email, hashPassword, role);

    await userDatabase.signup(user);

    const token = new Authenticator().generateToken({ id, role });

    return { token, role };
  };

  public login = async (user: UserLogin): Promise<string> => {
    const { email, password }: UserLogin = user;

    if (!email || !password) throw new MissingFields();

    if (password.length < 3)
      throw new Error(`A senha deve conter no minimo 3 caracteres!`);

    const userDatabase = new UserDatabase();
    const userByEmail = await userDatabase.verifyEmail(email);

    if (!userByEmail) throw new Error(`E-mail não cadastrado!`);

    const verifyPassword = await new HashManager().compare(
      password,
      userByEmail.getPassword()
    );

    if (!verifyPassword) throw new Error(`Senha está incorreta!`);

    const token = new Authenticator().generateToken({
      id: userByEmail.getId(),
      role: userByEmail.getRole(),
    });
    
    return token;
  };
}
