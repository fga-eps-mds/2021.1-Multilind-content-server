import { Router } from "express";
const router = Router();

import {
  getOne,
  create,
  getAll,
  update,
  deleteOne,
} from "../../controllers/Lingua";

const id_lingua = "/:id_lingua";

router.get(id_lingua, getOne);
router.get("/", getAll);
router.post("/", create);
router.put(id_lingua, update);
router.delete(id_lingua, deleteOne);

export default router;
