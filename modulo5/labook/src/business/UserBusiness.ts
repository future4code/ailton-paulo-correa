import { UserDatabase } from "../database/UserDatabase";
import { ParamsError } from "../errors/ParamsError";
import { IUserCreated, IUserSignup, User, USER_ROLES } from "../models/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness {
  constructor(
    private userDatabase: UserDatabase,
    private idGenerator: IdGenerator,
    private hashManager: HashManager,
    private authenticator: Authenticator
  ) {}

  public signup = async (userInfos: IUserSignup): Promise<IUserCreated> => {
    const { name, email, password } = userInfos;

    if (!name || !email || !password) throw new ParamsError();

    if (password.length < 6)
      throw new Error("Senha deve conter ao menos 6 caracteres!");

    const verifyEmailExist = await this.userDatabase.verifyEmail(email);

    if (verifyEmailExist) throw new Error("E-mail já cadastrado!");

    const id = this.idGenerator.generate();
    const hashPassword = await this.hashManager.hash(password);
    const role = USER_ROLES.NORMAL;
    const user = new User(id, name, email, hashPassword, role);

    await this.userDatabase.signup(user);

    const token = this.authenticator.generateToken({ id, role });

    return { token, role };
  };
}
