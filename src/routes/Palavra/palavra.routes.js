import { Router } from "express";
const router = Router();

import {
  getOne,
  create,
  getAll,
  update,
  deleteOne,
} from "../../controllers/Palavra";

const id_palavra = "/:id_palavra";

router.get(id_palavra, getOne);
router.get("/", getAll);
router.post("/", create);
router.put(id_palavra, update);
router.delete(id_palavra, deleteOne);

export default router;
