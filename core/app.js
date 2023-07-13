import express from "express";
import routes from "./routes/index.js";
import bodyParser from "body-parser";
import { getFields } from "./middlewares/ParseMutliformData.js";
const app = express();

app.use(express.raw());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(getFields.array(), routes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});
export default app;
