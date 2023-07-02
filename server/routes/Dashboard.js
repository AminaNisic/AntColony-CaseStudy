const express = require('express');
const router = express.Router();
const { Pipelines } = require("../models");
const { validateToken } = require("../middleware/AuthMiddleware");

//test route for jwt
//validateToken
/*router.get("/", validateToken, async (req,res) => {
    return res.json("dashboard");
});*/

//get
router.get("/", async (req, res) => {
    const listOfPipelines = await Pipelines.findAll();
    res.json(listOfPipelines);
  });


//maj pajplajns
router.get("/myPipelines",validateToken, async (req, res) => {
  const id=req.user.id
  const Pipeline = await Pipelines.findAll({ where: { UserId: id }});
  res.json(Pipeline);
});

//maj specific pajplajn vjv ce trebat da user previewa or sth
router.get("/myPipelines/:pipelineid",validateToken, async (req, res) => {
  const id=req.user.id
  const pipelineid = req.params.pipelineid
  const Pipeline = await Pipelines.findOne({ where: { UserId: id, id: pipelineid }});
  res.json(Pipeline);
});

//list of pipelines for specific PROJECT
router.get("/:projectid", validateToken, async (req, res) => {
  const id = req.user.id
  const projectid = req.params.projectid
  const Pipeline = await Pipelines.findAll({ where: { UserId: id, ProjectId: projectid } });
  res.json(Pipeline);
})


//kriejt pajplajn
///////////project id ce se uzet na frontu react ima neke fazone, ili samo dodat ProjectId:id u formik data ???? nesam sigurny


/*const projectId = 123; // Replace with the actual project ID, from the previous route 

const pipelineData = {
  projectId: projectId, // Pass the project ID as a request body parameter
  name: "Pipeline Name",
  description: "Pipeline description",
  // Other pipeline data
};

axios.post("/createPipeline", pipelineData)
  .then(response => {
    // Handle the response
  })
  .catch(error => {
    // Handle the error
  });*/


/*router.post("/createPipeline", validateToken, async (req, res) => {
  const userid = req.user.id;
  pipeline.UserId = userid;
  const pipeline = req.body;
  await Pipelines.create(pipeline);
  res.json(pipeline);
});*/

router.post("/createPipeline", validateToken, async (req, res) => {
  const pipeline = req.body;
  const userid = req.user.id;
  pipeline.UserId = userid;
  await Pipelines.create(pipeline);
  res.json(pipeline);
});
 
//edit routes
router.put("/editName", validateToken, async (req, res) => {
  const { newpipelineName, id } = req.body;//pipelinename passed here is the new pipeline name, maybe i change so it's not confusion later? 
  await Pipelines.update({ pipelineName:newpipelineName }, {where: { id:id } });
  res.json(newpipelineName);
});

router.put("/editActions", validateToken, async (req, res) => {
  const { newactions, id } = req.body;
  await Pipelines.update({ actions:newactions }, {where: { id:id } });
  res.json(newactions);
});

router.put("/runpipeline", validateToken, async (req, res) => {
  const { successstatus, id } = req.body;
  await Pipelines.update({ stateOfPipeline:successstatus }, {where: { id:id } });
  res.json(successstatus);
});


//delete
router.delete("/:pipelineid", validateToken, async (req, res) => {
  const pipelineid = req.params.pipelineid

  await Pipelines.destroy({
    where: {
      id: pipelineid
    },
  });

  res.json("Deleted successfully");
});

module.exports = router;