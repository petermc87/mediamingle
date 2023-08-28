const express = require("express");
const router = express.Router();
const { dataController, apiController } = require("./dataController");

// Show
router.get("/", dataController.getSearched, apiController.getSearched);

module.exports = router;
