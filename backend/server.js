import express from "express";

const PORT = 3000;

const app = express();

app.get("/", (_req, res) => {
  res.send("It works!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
