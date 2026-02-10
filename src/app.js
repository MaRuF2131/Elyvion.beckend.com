import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";
import { env } from "./config/env.js";

const app = express();
app.use(async (req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});
// Enable CORS
app.use(cors({
  origin: true, // allow all origins dynamically
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  credentials: true,
})); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use(routes);
app.use(notFound);
app.use(errorHandler);

app.listen(env.PORT, () => {
  console.log(`Backend running at http://localhost:${env.PORT}${env.API_PREFIX}`);
});
