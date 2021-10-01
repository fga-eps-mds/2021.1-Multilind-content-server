import { Router } from "express";
const router = Router();

import {
  create,
  getOne,
  getAll,
  deleteOne,
  updateOneById,
} from "../../controllers/Localidade";

const id_localidade = "/:id_localidade";

router.post("/", create);
router.get("/", getAll);
router.get(id_localidade, getOne);
router.delete(id_localidade, deleteOne);
router.put(id_localidade, updateOneById);

export default router;
