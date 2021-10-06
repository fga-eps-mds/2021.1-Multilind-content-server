import { Router } from "express";
const router = Router();

import {
  create,
  getAll
} from "../../controllers/Dialeto";

const idEtnia = "/:id_etnia";

router.get(idEtnia, getAll);
router.post("/", create);

export default router;
