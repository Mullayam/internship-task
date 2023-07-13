import connect from "../config/connect.js";

class PublicController {
  async AddCars(req, res) {
    const CarModel = connect.collection("cars");
    await CarModel.insertOne({
      name: "Ford",
      model: "Mustang",
      year: 2019,
      car_info: {
        image: "",
        img_gallery: {
          front: "front.jpg",
          back: "back.jpg",
          left: "left.jpg",
          right: "right.jpg",
          inner: "vinner.jpg",
          windsheild: "windsheild.jpg",
          other: "",
        },
        color: "Red",
        price: 1000000,
        millage: "22 Kmph",
        fuel_type: "Diesel",
        airbags: 6,
        service: "4 Times",
        engine: "WDP4",
      },
    });
    res.send({ success: "Car Added Successfully" }).end();
  }

  async GetCars(req, res) {
    let query = {};
    const params = req.query;
    if (params.year || params.model || params.name) {
      query = params;
     
    }    
    const CarModel = connect.collection("cars");
    const cars = CarModel.find(query);
    res.json({ cars });
  }
}
export default new PublicController();
