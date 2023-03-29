const express = require("express");

const router = express.Router();

const Worker = require("../models/worker");

//get all workers

router.get("/", async (req, res) => {
  const dataBaseResponse = await Worker.find();
  res.json(dataBaseResponse);
});

//get one worker by id

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const dataBaseResponse = await Worker.findById(id);
  res.json(dataBaseResponse);
});

//create worker
router.post("/", async (req, res) => {
  const { name, lastName, address, qualification, image, skills } = req.body;
  const workerCreated = new Worker({
    name,
    lastName,
    address,
    qualification,
    image,
    skills,
  });
  const workerSaved = await Worker.create(workerCreated);
  res.json({ dataReceived: workerSaved });
});

//edit worker data

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, lastName, address, qualification, image, skills } = req.body;
  const workerUpdated = {
    name,
    lastName,
    address,
    qualification,
    image,
    skills,
  };

  await Worker.findByIdAndUpdate(id, workerUpdated);

  res.send(`worker ${name} ${lastName} updated succefull`);
});

// delete worker

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Worker.findByIdAndDelete(id);
  res.send(`worker with the id ${id} removed succefully`);
});

module.exports = router;
