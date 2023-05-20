const express = require("express");
const router = express.Router();
const { Projects } = require("../models");

router.post("/createProject", async (req, res) => {
    const project = req.body;
    await Projects.create(project);
    res.json(project);
  });
  
  module.exports = router;