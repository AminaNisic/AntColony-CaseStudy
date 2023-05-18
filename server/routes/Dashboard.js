const express = require('express');
const router = express.Router();
const { Pipelines } = require("../models");
const { validateToken } = require("../middleware/AuthMiddleware");

//test route for jwt
//validateToken
/*router.get("/", validateToken, async (req,res) => {
    return res.json("dashboard");
});*/

//baseroute, will user map tomorrow
router.get("/", async (req, res) => {
    const listOfPipelines = await Pipelines.findAll();
    res.json(listOfPipelines);
  });

  //probably treba i ovo ako user hoce da previewa pajplajn
router.get("/ById/:id", async (req, res) => {
  const id=req.params.id
  const Pipeline = await Pipelines.findByPk(id);
  res.json(Pipeline);
});

//kriejt pajplajn
router.post("/createPipeline", async (req, res) => {
  const pipeline = req.body;
  await Pipelines.create(pipeline);
  res.json(pipeline);
});

module.exports = router;