import bcrypt from "bcryptjs";

export class HashManager {
  public hash = async (password: string): Promise<string> => {
    const rounds = Number(process.env.BCRYPT_SALT_ROUNDS);
    const salt = await bcrypt.genSalt(rounds);

    return await bcrypt.hash(password, salt);
  };

  public compare = async (
    plaintext: string,
    hash: string
  ): Promise<boolean> => {
    return bcrypt.compare(plaintext, hash);
  };
}
