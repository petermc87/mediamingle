const dotenv = require("dotenv");
const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const PORT = 5000;

// Using the dotenv package so that the environment variables can be used.
dotenv.config({ path: "../.env.local" });

app.use(cors());

// This will be the req.body
app.use(express.json());

//--- FROM PREVIOUS APPS ---//
// app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
// app.use(express.static(path.join(__dirname, "build")));

//--> Tutorial way of doing things <--//
app.get("/api/search/:id", async (req, res) => {
  // The fetch request is being instigated but the API is coming back as invalid.
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
