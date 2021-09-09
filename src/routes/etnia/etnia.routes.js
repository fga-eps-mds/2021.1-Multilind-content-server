import express from "express";
const router = express.Router();
import {
  getOne,
  create,
  getAll,
  update,
  deleteOne,
} from "../../controllers/Etnia";

router.get("/etnia/:id_etnia", getOne);
router.get("/etnia", getAll);
router.post("/etnia", create);
router.put("/etnia/:id_etnia", update);
router.delete("/etnia/:id_etnia", deleteOne);

export default router;
