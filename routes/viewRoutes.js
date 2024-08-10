const express = require("express");
const { getView } = require("../controller/viewController");
const router = express.Router();

router.get("/", getView);

module.exports = router;
