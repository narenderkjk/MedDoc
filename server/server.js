const mongoose = require("mongoose");
require("dotenv").config();
require("colors"); // only if you want colored console logs

// Custom Imports
const app = require("./app");

const dbURI = process.env.DATABASE;
console.log("Database URI:", dbURI);

// ✅ Always pass options and handle errors properly
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Connected to MongoDB`.cyan.underline.bold);
    console.log("Environment:", `${process.env.NODE_ENV}`.yellow);
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
