import { Request, Response } from "express";
import { PingBusiness } from "../business/PingBusiness";

export class PingController {
  constructor(private pingBusiness: PingBusiness) {}

  public ping = async (req: Request, res: Response): Promise<void> => {
    try {
      const response = await this.pingBusiness.ping();

      res.status(200).send(response);
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  };
}
