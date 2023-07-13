import connect from "../../config/connect.js";
class DealershipController {
    // GET SOLD CARS
  async GetSoldCars(req, res) {
   try {
    if (!req.params.vehicle_id) {
        return res.status(401).send({
                    status: 401,
                    error: "Please provide vehicle_id"
                }).end();
    }
    const SoldVehiles = await connect
      .collection("sold_vehicles")
      .find({ _id: req.params.vehicle_id });
    res.send({SoldVehiles}).end();
   } catch (error) {
    res.send({error:error.message}).end();
   }
  }
//  TURN pENIDNG DEALS TO  SOLD
    
   async PendingDealsToSold(req, res) {
    try {
     if (!req.params.vehicle_id) {
         return res.status(401).send({
                     status: 401,
                     error: "Please provide vehicle_id"
                 }).end();
     }
     const SoldVehiles = await connect
       .collection("sold_vehicles")
       .find({ _id: req.params.vehicle_id });
     res.send({SoldVehiles}).end();
    } catch (error) {
     res.send({error:error.message}).end();
    }
   }
}
export default new DealershipController();
