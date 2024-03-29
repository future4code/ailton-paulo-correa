import { BaseDatabase } from "../BaseDatabase";
import { UserDatabase } from "../UserDatabase";
import { users } from "./data";

class Migrations extends BaseDatabase {
  execute = async () => {
    try {
      console.log("Creating tables...");
      await this.createTables();
      console.log("Tables created successfully.");

      console.log("Populating tables...");
      await this.insertData();
      console.log("Tables populated successfully.");

      console.log("Migrations completed.");
    } catch (error: any) {
      console.log("Error in migrations...");
      console.log(error.message);
    } finally {
      console.log("Ending connection...");
      this.getConnection().destroy();
      console.log("Connection closed graciously.");
    }
  };

  createTables = async () => {
    await this.getConnection().raw(`
        DROP TABLE IF EXISTS ${UserDatabase.TABLE_USERS};
        
        CREATE TABLE IF NOT EXISTS ${UserDatabase.TABLE_USERS}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            role ENUM("NORMAL", "ADMIN") DEFAULT "NORMAL" NOT NULL
        );
        `);
  };

  insertData = async () => {
    await this.getConnection().insert(users).into(UserDatabase.TABLE_USERS);
  };
}

const migrations = new Migrations();
migrations.execute();
