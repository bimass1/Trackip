const express = require("express");
const router = express.Router();
const api = require("../controller/UserControlle");
const { authenticateToken } = require("../middleware/authentication");

router.get("/", (req, res) => res.send("hello world"));
router.get("/api/trackip", authenticateToken, api.tracking);

module.exports = router;
