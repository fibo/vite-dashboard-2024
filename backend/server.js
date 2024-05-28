import cors from "cors";
import crypto from "crypto";
import express from "express";

const PORT = 4000;

const app = express();

const tokens = new Set();

app.use(cors());

app.use((req, _res, next) => {
  console.info(new Date().toISOString(), req.method, req.path);
  next();
});

app.get("/", (_req, res) => {
  res.send("It works!");
});

app.get("/account", (req, res) => {
  const token = req.headers.authentication;
  res.json({ isAuthenticated: tokens.has(token) });
});

app.post("/enter", (_req, res) => {
  const token = crypto.randomUUID();
  tokens.add(token);
  res.json({ token });
});

app.listen(PORT, () => {
  console.info(`Server running on port ${PORT}`);
});
