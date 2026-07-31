const express = require("express");
const sequelize = require("./config/db");

const app = express();
const PORT = 3000;

app.use(express.json());

async function connectDB() {
  try {
    // await sequelize.authenticate();
    await sequelize.authenticate();
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Unable to connect to the database:", error);
  }
}

connectDB();
// console.log(sequelize);

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

app.listen(PORT, async () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
