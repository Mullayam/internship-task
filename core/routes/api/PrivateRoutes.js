import { Router } from "express";
import PublicController  from "../../controllers/GeneralController.js"
const router = Router();

router.post("/add-car",PublicController.AddCars );
router.get("/get-cars",PublicController.GetCars );
export default router;
