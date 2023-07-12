import { Router } from "express";
const router = Router();
import * as API_Routes from "./api/index.js";
 


router.use("/user", API_Routes.UserRoutes);
router.use("/admin", API_Routes.AdminRoute);
router.use("/dealerships", API_Routes.DealershipRoutes);
router.use(API_Routes.PublicRoutes);
export default router;
