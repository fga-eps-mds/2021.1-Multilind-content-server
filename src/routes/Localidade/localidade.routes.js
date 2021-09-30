import { Router } from "express";
const router = Router();

import { getOne, create } from "../../controllers/Localidade";

const idLocalidade = "/:id_localidade";

router.get(idLocalidade, getOne);
router.post("/", create);

export default router;
