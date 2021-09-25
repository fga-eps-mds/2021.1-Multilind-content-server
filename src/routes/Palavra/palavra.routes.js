import { Router } from "express";
const router = Router();

import {
  getOne,
  create,
  getAll,
  update,
  deleteOne,
} from "../../controllers/Palavra";

const idLingua = "/:id_lingua";

router.get(idLingua, getOne);
router.get(`/all${idLingua}`, getAll);
router.post(idLingua, create);
router.put(idLingua, update);
router.delete(idLingua, deleteOne);

export default router;
