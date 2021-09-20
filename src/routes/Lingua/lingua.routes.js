import { Router } from "express";
const router = Router();

import {
  getOne,
  create,
  getAll,
  update,
  deleteOne,
} from "../../controllers/Lingua";

const idLingua = "/:id_lingua";

router.get(idLingua, getOne);
router.get("/", getAll);
router.post("/", create);
router.put(idLingua, update);
router.delete(idLingua, deleteOne);

export default router;
