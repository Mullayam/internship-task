import "dotenv/config";
import "colors" 
import "./core/config/connect.js";
import cors from"cors";  
import app from  "./core/app.js"
 
 
// app.use(APP_KEY);
 
 
// Home Routes
app.get("/", function (req, res) {
  let message = "OK";
  let status = "online";  
  res.json({
    status,
    message,
    info:{
      version: "1.0.0",      
    },
  });
});
// ENABLE CORS POLICY 
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

console.log("----- Starting -----".green);
  // listening server
app.listen(process.env.SERVER_PORT || 8000, () =>
    console.log("Server listening on 8000".yellow)
);

