import express from "express";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(bodyparser.json({ limit: "32mb", extended: "true" }));
app.use(bodyparser.urlencoded({ limit: "32mb", extended: "true" }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://INSTAVERSE:INSTAVERSE@cluster0.bzckw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`server runninng on port:${PORT}`))
  )
  .catch((err) => console.log(err.message));
