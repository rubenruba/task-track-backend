import { Request, Response } from "express";

export interface ExpressController {
    run(req: Request, res: Response): Promise<void>;
}