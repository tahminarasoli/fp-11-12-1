const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

const homeRoutes = require("./routes/home.js");
const connectDB = require("./models/connectDB");

const app = express();
dotenv.config();

connectDB();

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.use("/home", homeRoutes);

const PORT = process.env.PORT || 5000;


// production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
