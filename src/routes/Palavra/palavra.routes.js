import { Router } from "express";
const router = Router();

import {
  getOne,
  create,
  getAll,
  update,
  deleteOne,
  getAllPages,
} from "../../controllers/Palavra";

const idLingua = "/:id_lingua";
const idPalavra = "/:id_palavra";

router.get(`/one${idLingua}${idPalavra}`, getOne);
router.get(`/all${idLingua}`, getAll);
router.post(idLingua, create);
router.put(idLingua, update);
router.delete(idLingua, deleteOne);
router.get(`/pages${idLingua}/:page/:rowsPerPage`, getAllPages);

export default router;
