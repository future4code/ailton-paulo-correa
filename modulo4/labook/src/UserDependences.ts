import { PingBusiness } from "./business/PingBusiness";
import { PostBusiness } from "./business/PostBusiness";
import { UserBusiness } from "./business/UserBusiness";
import { PingController } from "./controller/PingController";
import { PostController } from "./controller/PostController";
import { UserController } from "./controller/UserController";
import { PostDatabase } from "./database/PostDatabase";
import { UserDatabase } from "./database/UserDatabase";
import { Authenticator } from "./services/Authenticator";
import { HashManager } from "./services/HashManager";
import { IdGenerator } from "./services/IdGenerator";

export const pingController = new PingController(new PingBusiness());

export const userController = new UserController(
  new UserBusiness(
    new UserDatabase(),
    new IdGenerator(),
    new HashManager(),
    new Authenticator()
  )
);

export const postController = new PostController(
  new PostBusiness(new PostDatabase(), new IdGenerator(), new Authenticator())
);
