const express = require("express");

const app = express();

app.use(express.json());




app.get("/api/v1/users", async (req, res) => {
  res.status(200).json({
    status: "success",
  });
});
app.post("/api/v1/users", async (req, res) => {
  res.status(201).json({
    status: "success",
  });
});

app.get("/api/v1/users/:id", async (req, res) => {
  res.status(200).json({
    status: "success",
  });
});

app.patch("/api/v1/users/:id", async (req, res) => {
  res.status(200).json({
    status: "success",
  });
});

app.delete("/api/v1/users", async (req, res) => {
  res.status(200).json({
    status: "success",
  });
});

module.exports=app;
