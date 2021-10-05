import { Router } from "express";
const router = Router();

import { create, getAll, deleteOne } from "../../controllers/Falada";

const id_falada = "/:id_falada";

router.post("/", create);
router.get("/", getAll);
router.delete(id_falada, deleteOne);

export default router;
