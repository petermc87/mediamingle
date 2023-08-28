const dotenv = require("dotenv");
const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const PORT = 8080;

// Using the dotenv package so that the environment variables can be used.
dotenv.config({ path: "../.env.local" });

app.use(cors());

// This will be the req.body
app.use(express.json());

app.get("/api/search/:id", async (req, res) => {
  // Pass in a third parameter from the front end to add to the API key.
  // This will be the req.params.id.
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${req.params.id}&apiKey=${process.env.NEXT_PUBLIC_KEY}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// Linking url with the route.
app.use("/api/search", require("./routes"));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
