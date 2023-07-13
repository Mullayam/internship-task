import { Router } from "express";
import { Authentication } from "../../controllers/index.js";
import { isAuthenticated } from "../../middlewares/isAuthenticated.js";
const router = Router();

router.post("/login", Authentication.Login);
router.post("/register", Authentication.Register);
router.post("/forget-password", Authentication.ForgetPassword);
router.post("/logout",Authentication.Logout);
router.get("/current-user",isAuthenticated,Authentication.CurrentUser);
// Endpoint to view all vehicles owned by user
router.get('/:id/vehicles', isAuthenticated, (req, res) => {
    const userId = req.params.id;  
    // Fetch all vehicles owned by the user from the database
  
    // Example response
    const vehicles = [{ make: 'Toyota', model: 'Corolla' }, { make: 'Honda', model: 'Civic' }];
    res.json({ vehicles });
  });
 
export default router;
