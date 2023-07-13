import { Router } from "express";
import DealershipController from "../../controllers/dealer/DealershipController.js";

const router = Router()
 
  // Endpoint to view all cars sold by dealership
  router.get('/:vehicle_id/sold-cars', DealershipController.GetSoldCars); 

  router.post('/:id/cars', (req, res) => {
    const dealershipId = req.params.id;
    const cars = req.files;
  
    // Process the uploaded cars and add them to the dealership
  
    res.sendStatus(201); // Created
  });
  
  // Endpoint to view deals provided by dealership
  router.get('/:id/deals', (req, res) => {
    const dealershipId = req.params.id;
  
    // Fetch all deals provided by the specified dealership from the database
  
     
    const deals = [{ price: 10000, car: 'Toyota Corolla' }, { price: 12000, car: 'Honda Civic' }];
    res.json({ deals });
  });
  
  // Endpoint to add deals to dealership
  router.post('/:id/deals',   (req, res) => {
    const dealershipId = req.params.id;
    const deals = req.files;
  
    // Process the uploaded deals and add them to the dealership
  
    res.sendStatus(201); // Created
  });
  
  // Endpoint to view all vehicles dealership has sold
  router.get('/:id/sold-vehicles', (req, res) => {
    const dealershipId = req.params.id;
  
    // Fetch all vehicles sold by the specified dealership from the database
  
   
    const vehicles = [{ make: 'Toyota', model: 'Corolla' }, { make: 'Honda', model: 'Civic' }];
    res.json({ vehicles });
  });
  
  // Endpoint to add new vehicle to the list of sold vehicles after a deal is made
  router.post('/deals/:id/sold-vehicles', (req, res) => {
    const dealId = req.params.id;
    const vehicle = req.file;
  
    // Process the uploaded vehicle and add it to the list of sold vehicles
  
    res.sendStatus(201); // Created
  });
  
export default router