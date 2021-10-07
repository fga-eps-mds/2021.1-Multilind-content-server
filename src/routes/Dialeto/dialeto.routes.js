import { Router } from "express";
const router = Router();

import { create, getAll } from "../../controllers/Dialeto";

router.get("/", getAll);
router.post("/", create);

export default router;
