import { Router } from "express";
const router = Router();

import {
  getOne,
  create,
  getAll,
  update,
  deleteOne,
} from "../../controllers/Etnia";

const idEtnia = "/:id_etnia";

router.get(idEtnia, getOne);
router.get("/", getAll);
router.post("/", create);
router.put(idEtnia, update);
router.delete(idEtnia, deleteOne);

export default router;
