const express = require("express");
const router = express.Router();
const { getPhotosByCategory } = require("../controllers/photoscontroller");

router.get("/:category", getPhotosByCategory);

module.exports = router;
