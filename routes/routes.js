const express = require("express");
const router = express.Router();
const { getLogin } = require("../controllers/controllers");

router.route("/").get(getLogin);

module.exports = router;
