import path from "path";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

const __dirname = path.resolve();
const app = express();
dotenv.config({ path: __dirname + "./.env" });

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the stories API");
});

app.use("/posts", postRoutes);
app.use("/user", userRoutes);

const PORT = process.env.PORT || 5000;
const mode = process.env.CONNECTION_URL;

mongoose
  .connect(
    "mongodb+srv://fahmid:Black01507@cluster0.7fxz4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));
