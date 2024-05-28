import express from "express";
import cors from "cors";

const PORT = 4000;

const app = express();

app.use(cors());

app.use((req, _res, next) => {
  console.info(req.method, req.path);
  next();
});

app.get("/", (_req, res) => {
  res.send("It works!");
});

app.get("/account", (_req, res) => {
  res.json({ isAuthenticated: false });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
