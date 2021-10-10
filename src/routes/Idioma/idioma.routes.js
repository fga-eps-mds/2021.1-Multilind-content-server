import { Router } from "express";
const router = Router();

import { create, getAll } from "../../controllers/Idioma";

router.get("/", getAll);
router.post("/", create);

export default router;
