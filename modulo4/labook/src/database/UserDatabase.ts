import { User } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public static TABLE_USERS = "Labook_Users";

  public verifyEmail = async (email: string): Promise<User | undefined> => {
    const result = await this.getConnection()
      .select(`*`)
      .from(UserDatabase.TABLE_USERS)
      .where({ email });

    if (!result.length) return undefined;

    return new User(
      result[0].id,
      result[0].name,
      result[0].email,
      result[0].password,
      result[0].role
    );
  };

  public signup = async (user: User): Promise<void> => {
    await this.getConnection()
      .insert({
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword(),
        role: user.getRole(),
      })
      .into(UserDatabase.TABLE_USERS);
  };
}
