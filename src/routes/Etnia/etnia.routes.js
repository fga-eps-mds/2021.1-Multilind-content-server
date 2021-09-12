import { Router } from "express";
const router = Router();

import {
  getOne,
  create,
  getAll,
  update,
  deleteOne,
} from "../../controllers/Etnia";

router.get("/:id_etnia", getOne);
router.get("/", getAll);
router.post("/", create);
router.put("/:id_etnia", update);
router.delete("/:id_etnia", deleteOne);

export default router;
