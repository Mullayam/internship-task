import { Router } from "express";
import { isAuthenticated } from "../../middlewares/isAuthenticated.js";
import { PublicController } from "../../controllers/index.js";
const router = Router();

router.get("/cars",PublicController.GetCars);

// Endpoint to view all cars in a dealership
router.get('/dealerships/:id/cars', (req, res) => {
    const dealershipId = req.params.id;
  
    // Fetch all cars from the specified dealership in the database
  
    // Example response
    const cars = [{ make: 'Toyota', model: 'Corolla' }, { make: 'Honda', model: 'Civic' }];
    res.json({ cars });
  });
  // Endpoint to view dealerships with a certain car
  router.get('/cars/:make', (req, res) => {
    const make = req.params.make;
  
    // Fetch all dealerships with the specified car from the database
  
    // Example response
    const dealerships = [{ name: 'ABC Motors', location: 'New York' }, { name: 'XYZ Autos', location: 'Los Angeles' }];
    res.json({ dealerships });
  });
  router.get('/dealerships/range', isAuthenticated, (req, res) => {
    const userLocation = req.query.location;
  
    // Use Maps API to fetch dealerships within the specified range based on user location
  
    // Example response
    const dealerships = [{ name: 'ABC Motors', location: 'New York' }, { name: 'XYZ Autos', location: 'Los Angeles' }];
    res.json({ dealerships });
  });
  // Endpoint to view all deals on a certain car
  router.get('/deals/:make', (req, res) => {
    const make = req.params.make;
  
    // Fetch all deals on the specified car from the database
  
    // Example response
    const deals = [{ price: 10000, dealership: 'ABC Motors' }, { price: 12000, dealership: 'XYZ Autos' }];
    res.json({ deals });
  });
  // Endpoint to view all deals from a certain dealership
  router.get('/dealerships/:id/deals', (req, res) => {
    const dealershipId = req.params.id;
  
    // Fetch all deals from the specified dealership in the database
  
    // Example response
    const deals = [{ price: 10000, car: 'Toyota Corolla' }, { price: 12000, car: 'Honda Civic' }];
    res.json({ deals });
  });
  router.post('/deals/:id/buy', isAuthenticated, (req, res) => {
    const dealId = req.params.id;
  
    // Process the purchase based on the deal ID  
    res.sendStatus(200); // OK
  });
   
export default router;
