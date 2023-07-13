import { Router } from "express";
const router = Router();
import * as API_Routes from "./api/index.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
 


router.use("/user", API_Routes.UserRoutes);
router.use("/private",isAuthenticated, API_Routes.PrivateRoutes);
router.use("/dealerships", API_Routes.DealershipRoutes);
router.use(API_Routes.PublicRoutes);
router.use("*",(req, res) => {  
    res.status(404).json({ error: "Not Found" });
  });
export default router;
