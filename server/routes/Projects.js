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
//myprojects
router.get("/myProjects", validateToken, async (req, res) => {
  const id=req.user.id;
  const Project = await Projects.findAll({ where: { UserId: id }});
  res.json(Project); 
}); 

//get my project by id
router.get("/myProjects/:projectid", validateToken, async (req, res) => {
  const userid=req.user.id
  const projectid = req.params.projectid
  const Project = await Projects.findOne({ where: { UserId: userid, id:projectid}});
  res.json(Project);
});

//edits
router.put("/editrepourl", validateToken, async (req, res) => {
  const { newurl, id } = req.body;
  await Projects.update({ repoURL:newurl }, {where: { id:id } });
  res.json(newurl);
});

/*const user= await User.findOne({ where: { firstName: 'John' } });
user.lastName = "Jackson" 
await user.save()*/

router.put("/editname/:projectid", validateToken, async (req, res) => {
  const { newname, id } = req.body;
  await Projects.update({ projectName: newname }, { where: { id: id } });
  res.json(newname);
});

router.put("/editstatus", validateToken, async (req, res) => {
  const { newstatus, id } = req.body;
  await Projects.update({ status:newstatus }, {where: { id:id } });
  res.json(newstatus);
});

//delete
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