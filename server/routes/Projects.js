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
router.get("/myProjects", validateToken, async (req, res) => {
  const id=req.user.id;
  const Project = await Projects.findOne({ where: { UserId: id }});
  res.json(Project); 
}); 

//get my project by id
router.get("/myProjects/:projectid", validateToken, async (req, res) => {
  const userid=req.user.id
  const projectid = req.params.projectid
  const Project = await Projects.findOne({ where: { UserId: userid, id:projectid}});
  res.json(Project);
});

router.delete("/:projectid", validateToken, async (req, res) => {
  const projectid = req.params.projectid

  await Projects.destroy({
    where: {
      id: projectid
    },
  });

  res.json("Deleted successfully");
});
  
  module.exports = router;