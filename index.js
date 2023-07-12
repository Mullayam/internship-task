 
import ("module-alias/register");
import("@config/dbConnection");
import("dotenv").config();
import cors from"cors";  
import app from  "./core/app"
 
 
 
  app.use(
    cors({
      origin: "*",
      methods: "GET,PUT,POST,DELETE",
      allowedHeaders: [
        "Authorization",
        "Content-Type",
        "API_KEY",
        "Access-Control-Allow-Origin",
      ],
    })
  );
 


