import { Router } from "express";
import * as ListController from '../../controllers/list';
import { authMiddleware } from "../../middlewares/authMiddleware";
import { deleteList } from "./delete";
import { getById } from "./getById";
import { getByUserId } from "./getByUserId";

export const listRouter = Router();

listRouter.use(authMiddleware);

listRouter.post('', async (req, res) => await ListController.createListController.run(req, res));
listRouter.put('', async (req, res) => await ListController.updateListController.run(req, res));

getById(listRouter);
getByUserId(listRouter);
deleteList(listRouter);
