const express = require("express");
const router = express.Router();
const { Projects } = require("../models");
const { validateToken } = require("../middleware/AuthMiddleware");

//create
router.post("/createProject", validateToken, async (req, res) => {
    const project = req.body;
    const userid = req.user.id;
    project.UserId = userid;
    await Projects.create(project);
    res.json(project);
  });

//gets
router.get("/", async (req, res) => {
  const listOfProjects = await Projects.findAll();
  res.json(listOfProjects);
});

//
//findOne({ where: { title: 'My Title' } })
router.get("/ById/:id", async (req, res) => {
  const id=req.params.id;
  const Project = await Projects.findOne({ where: { UserId: id }});
  res.json(Project);
}); 
  
  module.exports = router;