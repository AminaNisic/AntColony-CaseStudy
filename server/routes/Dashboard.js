const express = require('express');
const router = express.Router();
const { validateToken } = require("../middleware/AuthMiddleware");

//validateToken
router.get("/", validateToken, async (req,res) => {
    return res.json("dashboard");
});

module.exports = router;