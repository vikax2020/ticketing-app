import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import fileUpload from "express-fileupload";
import { conn } from "./connections/dbConnect.js";
import ticketRoute from "./routes/ticketRoute.js";
import adminRoute from "./routes/adminRoute.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload());

app.use("/", ticketRoute);
app.use("/", adminRoute);

conn();
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));

