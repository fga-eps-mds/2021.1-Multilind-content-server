import { Router } from "express";
const router = Router();

import { create, getAll, getAllEthnicity } from "../../controllers/Dialeto";

router.get("/", getAll);
router.post("/", create);
router.get("/lingua/:id_lingua", getAllEthnicity);

export default router;
