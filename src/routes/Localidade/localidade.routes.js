import { Router } from "express";
const router = Router();

import {
  getOne,
  create,
  getAll,
  createManyLocation,
} from "../../controllers/Localidade";

const idLocalidade = "/:id_localidade";

router.get("/", getAll);
router.get(idLocalidade, getOne);
router.post("/", create);
router.post("/many", createManyLocation);

export default router;
