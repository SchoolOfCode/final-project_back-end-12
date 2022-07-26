import express from "express";
import cors from "cors";
import router from "./routes/index.js";

const PORT = process.env.PORT || 4000;

export const app = express();

app.use(cors());
app.use(express.json());

app.use("/produce", router);

app.get("/", (req, res) => {
  res.send(
    "Go to /produce to get all items, or use ?item= or ?month= to query specifically, or /produce/random if you're feeling lucky."
  );
});

app.listen(`${PORT}`);

console.log(`Listening on ${PORT}`);
