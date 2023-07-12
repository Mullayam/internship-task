import express from "express";
const app = express();

console.log("----- Starting -----".green);
// listening server
app.listen(AppConfig.APP.SERVER_PORT || 8000, () =>
  console.log("Server listening on 8000".yellow)
);
export default app