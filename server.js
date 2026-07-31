const app = require("./app");
const sequelize = require("./config/db");

async function connectDB() {
  try {
    // await sequelize.authenticate();
    await sequelize.authenticate();
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Unable to connect to the database:", error);
  }
}

const PORT = 3000;

app.listen(PORT, async () => {
  console.log(`Server running on port http://localhost:${PORT}`);
  connectDB();
});
