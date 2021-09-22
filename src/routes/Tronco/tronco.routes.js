import { Router } from "express";
const router = Router();

import {
  getOne,
  create,
  getAll,
  update,
  deleteOne,
} from "../../controllers/Tronco";

const idTronco = "/:id_tronco";

router.get(idTronco, getOne);
router.get("/", getAll);
router.post("/", create);
router.put(idTronco, update);
router.delete(idTronco, deleteOne);

export default router;
